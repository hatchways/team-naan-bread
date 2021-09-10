const express = require('express');
const { createReview } = require('../controllers/review');
const router = express.Router();
const protect = require('../middleware/auth');

router.route('/').post(protect, createReview);

module.exports = router;
