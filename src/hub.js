const { Server } = require("socket.io");

const PORT = process.env.PORT || 3000;
const io = new Server(Number(PORT), { cors: { origin: "*" } });

const services = new Map(); // Stores connected services
const pendingRequests = new Map(); // Stores pending requests (requestId -> senderSocketId)

// Handle new connections
io.on("connection", (socket) => {
  const serviceName = socket.handshake.query.serviceName;
  console.log(`[Hub] ${serviceName} connected: ${socket.id}`);

  // Register the service
  services.set(serviceName, { socketId: socket.id, lastHeartbeat: Date.now() });

  // Handle incoming requests
  socket.on("request", ({ targetService, payload }) => {
    console.log(
      `[Hub] Received request from ${serviceName} to ${targetService} (ID: ${payload.id})`,
      payload
    );

    const target = services.get(targetService);

    if (target) {
      // Forward the request to the target service
      pendingRequests.set(payload.id, socket.id);
      console.log(
        `[Hub] Forwarding request to ${targetService} (${target.socketId})`
      );
      io.to(target.socketId).emit("request", payload);
    } else {
      // Notify the sender that the target service was not found
      console.warn(`[Hub] Service "${targetService}" not found`);

      // socket.emit("response", { id: payload.id, error: `Service "${targetService}" not found` });
      socket.emit("response", {
        id: payload.id,
        error: `Service "${targetService}" not found`,
      });
    }
  });

  // Handle responses
  socket.on("response", ({ id, response }) => {
    // Forward the response back to the requesting service
    console.log(`[Hub] Received response for request ${id}`, response);

    const requestSenderSockerID = pendingRequests.get(id);

    if (requestSenderSockerID) {
      // Emit the response only to the requesting client
      io.to(requestSenderSockerID).emit("response", { id, data: response });
      pendingRequests.delete(id); // Clean up
    } else {
      console.warn(`[Hub] No pending request found for ID ${id}`);
    }
  });

  // Handle heartbeats
  socket.on("heartbeat", ({ serviceName }) => {
    console.log(
      `[Hub] Received heartbeat from ${serviceName} - ${new Date().toLocaleString()}`
    );

    if (services.has(serviceName)) {
      services.get(serviceName).lastHeartbeat = Date.now();
    }
  });

  // Handle disconnections
  socket.on("disconnect", () => {
    services.delete(serviceName);
    console.log(`[Hub] ${serviceName} disconnected: ${socket.id}`);
  });
});

// Clean up inactive services
setInterval(() => {
  const now = Date.now();
  for (const [serviceName, data] of services) {
    if (now - data.lastHeartbeat > 15000) {
      services.delete(serviceName);
      console.log(`[Hub] Removed inactive service: ${serviceName}`);
    }
  }
}, 5000);

console.log(`[Hub] Running on port ${PORT}`);
