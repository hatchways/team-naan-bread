const express = require('express');
const router = express.Router();
const {
createProfile,
updateProfile,
findProfileById,
findAllProfiles,
} = require('../controllers/profile');

router.route('/createProfile').post(createProfile);

router.route('/updateProfile').post(updateProfile);

router.route('/findProfileById').post(findProfileById);

router.route('/findAllProfiles').get(findAllProfiles);

module.exports = router;
