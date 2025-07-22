const mongoose = require("mongoose");

const threatLogSchema = new mongoose.Schema({
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ThreatLog", threatLogSchema);
