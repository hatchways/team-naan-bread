const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  notificationType: {
    type: String,
    enum: ["success", "warning", "info", "confirmation"],
    default: "info",
    required: true,
  },
  title: { type: String, required: true },
  description: Text,
  read: { type: Boolean, default: false },
  date: { type: Date, default: Date.now() },
});

module.exports = Request = mongoose.model("notification", notificationSchema);
