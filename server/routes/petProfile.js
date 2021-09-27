const express = require('express');
const router = express.Router();
const {
createPetProfile,
updatePetProfile,
findPetProfilesByOwnerId,
findAllPetProfiles,
} = require('../controllers/petProfile');

router.route('/createPetProfile').post(createPetProfile);

router.route('/updatePetProfile').post(updatePetProfile);

router.route('/findPetProfilesByOwnerId').post(findPetProfilesByOwnerId);

router.route('/findAllPetProfiles').get(findAllPetProfiles);

module.exports = router;
