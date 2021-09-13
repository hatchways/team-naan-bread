const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema(
  {
    notificationType: {
      type: String,
      enum: ['success', 'warning', 'info', 'confirmation', 'dog sitting'],
      default: 'info',
    },
    title: { type: String, required: true },
    description: String,
    read: { type: Boolean, default: false },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    context: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true },
);

module.exports = Notification = mongoose.model('notification', notificationSchema);
