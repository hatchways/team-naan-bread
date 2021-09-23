const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');

const { createEvent, editEvent, attendEvent } = require('../controllers/event');

router.route('/').post(protect, createEvent);
router.route('/').put(protect, editEvent);
router.route('/attend/:id').post(protect, attendEvent);

module.exports = router;
