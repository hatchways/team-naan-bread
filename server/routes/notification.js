const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { validateCreateNotification } = require("../validate");

const {
  createNotification,
  markNotificationAsRead,
  getAllNotifications,
  getUnreadNotifications,
  markNotificationsBatchAsRead,
} = require("../controllers/notification");

router.route("/").post(protect, validateCreateNotification, createNotification);
router.route("/seen/:id").post(protect, markNotificationAsRead);
router.route("/seen-batch").post(protect, markNotificationsBatchAsRead);
router.route("/all").get(protect, getAllNotifications);
router.route("/all-unread").get(protect, getUnreadNotifications);

module.exports = router;
