const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');

const { createEvent } = require('../controllers/event');

router.route('/').post(protect, createEvent);

module.exports = router;
