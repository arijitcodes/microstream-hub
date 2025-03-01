const { Server } = require("socket.io");
const Logger = require("./utils/logger"); // Import the logger

const PORT = process.env.PORT || 3000;
const io = new Server(Number(PORT), { cors: { origin: "*" } });

const services = new Map(); // Stores connected services (serviceName -> { socketId, lastHeartbeat })
const pendingRequests = new Map(); // Stores pending requests (requestId -> senderSocketId)

const logger = new Logger(process.env.LOG_LEVEL || "debug"); // Initialize logger

/* 
  Socket.io Middleware Setup

  Socket.io Middleware to handle Duplicate Client Service Registration.

  This middleware will check if a service is already registered with the same name.
  If so, it will reject the new connection request, log a warning and pass an error to the client.
  Error Structure: { 
    code: "DUPLICATE_SERVICE_REGISTRATION", 
    content: "Duplicate Service Registration Name! A service with the same name is already registered." 
  }
  
  Otherwise, it will proceed with the connection.
  
  This is to prevent multiple instances of the same service from connecting to the hub.
  The hub will only keep the one connection for each service.
*/
io.use((socket, next) => {
  const serviceName = socket.handshake.query.serviceName;

  // If the service is already registered, reject the connection and pass an error to the client
  if (services.has(serviceName)) {
    logger.warn(
      `Duplicate service registration attempt: ${serviceName} from Socket ID: ${socket.id}`
    );

    const error = new Error("DUPLICATE_SERVICE_REGISTRATION");
    error.data = {
      code: "DUPLICATE_SERVICE_REGISTRATION",
      content:
        "Duplicate Service Registration Name! A service with the same name is already registered.",
    };

    // Set a flag to indicate that the connection was rejected
    socket.rejected = true;

    next(error);
  }

  // If the service is not registered, proceed with the connection
  next();
});

// Handle new connections
io.on("connection", (socket) => {
  const serviceName = socket.handshake.query.serviceName;

  // If the connection was rejected by the middleware, close the connection
  if (socket.rejected) {
    logger.warn(
      `Connection rejected for duplicate service registration: ${serviceName} from Socket ID: ${socket.id}`
    );
    socket.disconnect(true);
    return;
  }

  logger.info(`${serviceName} connected: ${socket.id}`);

  // Register the service
  services.set(serviceName, { socketId: socket.id, lastHeartbeat: Date.now() });

  // Handle incoming requests
  socket.on("request", ({ targetService, payload }) => {
    logger.debug(
      `Received request from ${serviceName} to ${targetService} (ID: ${payload.id})`,
      payload
    );

    const target = services.get(targetService);

    if (target) {
      // Forward the request to the target service
      pendingRequests.set(payload.id, socket.id);
      logger.debug(
        `Forwarding request to ${targetService} (${target.socketId})`
      );
      io.to(target.socketId).emit("request", payload);
    } else {
      // Notify the sender that the target service was not found
      logger.warn(`Service "${targetService}" not found`);

      socket.emit("response", {
        id: payload.id,
        // error: `Service "${targetService}" not found`,  // This was causing a crash in the client response handler because it was expecting a "data" key
        data: { error: `Service "${targetService}" not found` }, // This is the correct way to handle the error - return a data object with an "error" key
      });
    }
  });

  // Handle responses
  socket.on("response", ({ id, response }) => {
    // Forward the response back to the requesting service
    logger.debug(`Received response for request ${id}`, response);

    const requestSenderSockerID = pendingRequests.get(id);

    if (requestSenderSockerID) {
      // Emit the response only to the requesting client
      io.to(requestSenderSockerID).emit("response", { id, data: response });
      pendingRequests.delete(id); // Clean up
    } else {
      logger.warn(`No pending request found for ID ${id}`);
    }
  });

  // Handle heartbeats
  socket.on("heartbeat", ({ serviceName }) => {
    logger.debug(`Received heartbeat from ${serviceName}`);

    if (services.has(serviceName)) {
      services.get(serviceName).lastHeartbeat = Date.now();
    }
  });

  // Handle disconnections
  socket.on("disconnect", () => {
    // Only remove the service if the connection was not rejected
    if (!socket.rejected) {
      services.delete(serviceName);
      logger.info(`${serviceName} disconnected: ${socket.id}`);
    }
  });
});

// Clean up inactive services
setInterval(() => {
  const now = Date.now();
  for (const [serviceName, data] of services) {
    if (now - data.lastHeartbeat > 15000) {
      services.delete(serviceName);

      // Disconnect the inactive service socket
      const inactiveServiceSocket = io.sockets.sockets.get(data.socketId); // Disconnect the socket
      inactiveServiceSocket.disconnect(true);

      logger.info(
        `Removed inactive service: ${serviceName} with Socket ID: ${inactiveServiceSocket.id}`
      );
    }
  }
}, 5000);

logger.info(`Running on port ${PORT}`);
