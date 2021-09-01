const asyncHandler = require("express-async-handler");
const Notification = require("../models/Notification");
const User = require("../models/User");

exports.createNotification = asyncHandler(async (req, res, next) => {
  const { userReceivedId, notificationType, title, description } = req.body;
  const user = await User.findById(userReceivedId);
  if (!user) {
    return res.sendStatus(400);
  }
  const newNotification = await Notification.create({
    userId: userReceivedId,
    notificationType: notificationType,
    title: title,
    description: description,
  });
  res.status(200).json(newNotification);
});
exports.markNotificationAsRead = asyncHandler(async (req, res, next) => {});
exports.getAllUnreadNotifications = asyncHandler(async (req, res, next) => {});
exports.getUnreadNotifications = asyncHandler(async (req, res, next) => {});
