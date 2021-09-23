const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');

const { createEvent, editEvent } = require('../controllers/event');

router.route('/').post(protect, createEvent);
router.route('/').put(protect, editEvent);

module.exports = router;
