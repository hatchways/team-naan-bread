const asyncHandler = require("express-async-handler");
const Notification = require("../models/Notification");
const User = require("../models/User");

exports.createNotification = asyncHandler(async (req, res, next) => {
  const { userReceivedId, notificationType, title, description } = req.body;
  const user = await User.findById(userReceivedId);
  if (!user) {
    return res.sendStatus(404);
  }
  const newNotification = await Notification.create({
    userId: userReceivedId,
    notificationType: notificationType,
    title: title,
    description: description,
  });
  res.status(201).json(newNotification);
});
exports.markNotificationAsRead = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const loggedInUserId = req.user.id;
  const user = await User.findById(loggedInUserId);
  if (!user) {
    return res.sendStatus(404);
  }
  const notification = await Notification.findById(id);
  if (!notification) {
    return res.sendStatus(404);
  }
  if (!notification.userId.equals(loggedInUserId)) {
    return res.sendStatus(403);
  }
  const seenNotification = await Notification.findByIdAndUpdate(id, {
    read: true,
  });
  res.sendStatus(200);
});
exports.getAllNotifications = asyncHandler(async (req, res, next) => {
  const loggedInUserId = req.user.id;
  const notifications = await Notification.find({
    userId: loggedInUserId,
  }).sort("createdAt");
  res.status(200).json(notifications);
});
exports.getUnreadNotifications = asyncHandler(async (req, res, next) => {
  const loggedInUserId = req.user.id;
  const user = await User.findById(loggedInUserId);
  if (!user) {
    return res.sendStatus(404);
  }
  const notifications = await Notification.find({
    userId: loggedInUserId,
    read: false,
  }).sort("createdAt");
  res.status(200).json(notifications);
});