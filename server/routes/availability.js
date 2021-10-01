const express = require('express');
const router = express.Router();
const {
findAvailabilityById,
updateAvailability,
findAllAvailability,
} = require('../controllers/availability');

router.route('/findAvailabilityById').post(findAvailabilityById);

router.route('/updateAvailability').post(updateAvailability);

router.route('/findAllAvailability').post(findAllAvailability);

module.exports = router;
