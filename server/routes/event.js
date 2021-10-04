const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');

const {
  createEvent,
  editEvent,
  attendEvent,
  cancelAttendanceToEvent,
  getOneEvent,
  removeEvent,
  getEventsNearby,
  getOneSimpleEvent,
} = require('../controllers/event');

router.route('/').post(protect, createEvent);
router.route('/').patch(protect, editEvent);
router.route('/attend/:id').patch(protect, attendEvent);
router.route('/cancel/:id').patch(protect, cancelAttendanceToEvent);
router.route('/:id').get(getOneEvent);
router.route('/simple/:id').get(getOneSimpleEvent);
router.route('/:id').delete(protect, removeEvent);
router.route('/nearby').post(protect, getEventsNearby);

module.exports = router;
