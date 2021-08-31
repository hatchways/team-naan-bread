const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createNotification,
  markNotificationAsRead,
  getAllUnreadNotifications,
  getUnreadNotifications,
} = require("../controllers/notification");

router.route("/").get(protect, createNotification);
router.route("/:id").post(protect, markNotificationAsRead);
router.route("/all").get(protect, getAllUnreadNotifications);
router.route("/all-unread").get(protect, getUnreadNotifications);

module.exports = router;
