const express = require('express');
const { createReview, getAllReviewsForProfile } = require('../controllers/review');
const router = express.Router();
const protect = require('../middleware/auth');

router.route('/').post(protect, createReview);
router.route('/profile/:id').get(getAllReviewsForProfile);

module.exports = router;
