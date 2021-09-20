const Notification = require('../models/Notification');

async function sendNotification(io, { userId, title, notificationType, context }) {
  const newNotification = await Notification.create({
    userId: userId,
    notificationType: notificationType,
    title: title,
    context: context,
  });
  io.to(userId).emit('new-notification', newNotification);
}

module.exports = { sendNotification };
