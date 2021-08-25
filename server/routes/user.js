const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  searchUsers,
  uploadProfilePhoto,
  deleteProfilePhoto,
} = require("../controllers/user");

router.route("/").get(protect, searchUsers);
router.route("/upload/profile-photo").post(protect, uploadProfilePhoto);
router.route("/profile-photo").delete(protect, deleteProfilePhoto);

module.exports = router;
