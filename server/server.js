// ✅ Import packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
dotenv.config();

// ✅ Routes
const authRoutes = require("./routes/auth");
const logRoutes = require("./routes/logs");
const ThreatLog = require("./models/ThreatLog");

// ✅ App setup
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/logs", logRoutes);

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ WebSocket for Real-Time Threat Logs
io.on("connection", (socket) => {
  console.log("⚡ New client connected");

  // Simulate and emit a threat log
  const sampleLog = {
    message: `Suspicious activity from ${Math.floor(
      Math.random() * 256
    )}.168.0.${Math.floor(Math.random() * 256)}`,
  };

  const threat = new ThreatLog(sampleLog);
  threat.save().then((saved) => {
    socket.emit("threatLog", saved);
  });

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected");
  });
});

// ✅ Start server
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
