const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema(
  {
    notificationType: {
      type: String,
      enum: ["success", "warning", "info", "confirmation"],
      default: "info",
    },
    title: { type: String, required: true },
    description: String,
    read: { type: Boolean, default: false },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

module.exports = Request = mongoose.model("notification", notificationSchema);
