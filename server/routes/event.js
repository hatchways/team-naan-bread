const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');

const { createEvent, editEvent, attendEvent, cancelAttendanceToEvent, getOneEvent } = require('../controllers/event');

router.route('/').post(protect, createEvent);
router.route('/').put(protect, editEvent);
router.route('/attend/:id').post(protect, attendEvent);
router.route('/cancel/:id').post(protect, cancelAttendanceToEvent);
router.route('/:id').get(getOneEvent);

module.exports = router;
