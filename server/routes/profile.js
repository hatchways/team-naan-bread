const express = require('express');
const router = express.Router();
const {
createProfile,
updateProfile,
findProfileById,
findAllProfiles,
uploadProfilePhoto,
deleteProfilePhoto,
profileSearch,
} = require('../controllers/profile');
const protect = require("../middleware/auth");
const { multerUploads } = require("../utils/multer");

router.route('/profileSearch').post(profileSearch);

router.route('/createProfile').post(createProfile);

router.route('/updateProfile').post(updateProfile);

router.route('/findProfileById').post(findProfileById);

router.route('/findAllProfiles').get(findAllProfiles);

router
  .route("/upload/profile-photo")
  .post(protect, multerUploads.single("image"), uploadProfilePhoto);
router.route("/profile-photo").delete(protect, deleteProfilePhoto);

module.exports = router;
