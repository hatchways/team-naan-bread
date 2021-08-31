const asyncHandler = require("express-async-handler");

exports.createNotification = asyncHandler(async (req, res, next) => {});
exports.markNotificationAsRead = asyncHandler(async (req, res, next) => {});
exports.getAllUnreadNotifications = asyncHandler(async (req, res, next) => {});
exports.getUnreadNotifications = asyncHandler(async (req, res, next) => {});
