const express = require('express');
const router = express.Router();
const {
findAvailabilityById,
updateAvailability
} = require('../controllers/availability');

router.route('/findAvailabilityById').post(findAvailabilityById);

router.route('/updateAvailability').post(updateAvailability);

module.exports = router;
