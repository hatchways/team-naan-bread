const express = require('express');
const router = express.Router();
const {
createPetProfile,
updatePetProfile,
findPetProfileById,
findAllPetProfiles,
} = require('../controllers/petProfile');

router.route('/createPetProfile').post(createPetProfile);

router.route('/updatePetProfile').post(updatePetProfile);

router.route('/findPetProfileById').post(findPetProfileById);

router.route('/findAllPetProfiles').get(findAllPetProfiles);

module.exports = router;
