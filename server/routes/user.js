const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
// const { multerUploads } = require("../utils/multer");
const {
  searchUsers,
  uploadProfilePhoto,
  deleteProfilePhoto,
} = require("../controllers/user");

router.route("/").get(protect, searchUsers);
// router
//   .route("/upload/profile-photo")
//   .post(protect, multerUploads.single("image"), uploadProfilePhoto);
// router.route("/profile-photo").delete(protect, deleteProfilePhoto);

module.exports = router;
