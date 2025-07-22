const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Define schema (if not already created)
const logSchema = new mongoose.Schema({
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Log = mongoose.model("Log", logSchema);

// GET latest 10 logs (sorted by time)
router.get("/", async (req, res) => {
  try {
    const logs = await Log.find().sort({ timestamp: -1 }).limit(10);
    res.json(logs);
  } catch (err) {
    console.error("Error fetching logs:", err);
    res.status(500).json({ error: "Failed to fetch logs" });
  }
});

module.exports = router;
