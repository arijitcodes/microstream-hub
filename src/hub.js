const { Server } = require("socket.io");
const Logger = require("./utils/logger"); // Import the logger

const PORT = process.env.PORT || 3000;
const io = new Server(Number(PORT), { cors: { origin: "*" } });

const services = new Map(); // Stores connected services
const pendingRequests = new Map(); // Stores pending requests (requestId -> senderSocketId)

const logger = new Logger(process.env.LOG_LEVEL || "debug"); // Initialize logger

// Handle new connections
io.on("connection", (socket) => {
  const serviceName = socket.handshake.query.serviceName;
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

      // socket.emit("response", { id: payload.id, error: `Service "${targetService}" not found` });
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
    services.delete(serviceName);
    logger.info(`${serviceName} disconnected: ${socket.id}`);
  });
});

// Clean up inactive services
setInterval(() => {
  const now = Date.now();
  for (const [serviceName, data] of services) {
    if (now - data.lastHeartbeat > 15000) {
      services.delete(serviceName);
      logger.info(`Removed inactive service: ${serviceName}`);
    }
  }
}, 5000);

logger.info(`Running on port ${PORT}`);
