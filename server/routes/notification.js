const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createNotification,
  markNotificationAsRead,
  getAllNotifications,
  getUnreadNotifications,
} = require("../controllers/notification");

router.route("/").post(protect, createNotification);
router.route("/seen/:id").post(protect, markNotificationAsRead);
router.route("/all").get(protect, getAllNotifications);
router.route("/all-unread").get(protect, getUnreadNotifications);

module.exports = router;
