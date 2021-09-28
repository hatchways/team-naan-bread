const express = require('express');
const protect = require("../middleware/auth");
const router = express.Router();
const {
createPetProfile,
updatePetProfile,
findPetProfilesByOwnerId,
findAllPetProfiles,
} = require('../controllers/petProfile');

router.route('/createPetProfile').post(protect, createPetProfile);

router.route('/updatePetProfile').post(protect, updatePetProfile);

router.route('/findPetProfilesByOwnerId').post(protect, findPetProfilesByOwnerId);

router.route('/findAllPetProfiles').get(protect, findAllPetProfiles);

module.exports = router;
