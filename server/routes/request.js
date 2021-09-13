const express = require('express');
const { getRequests, postRequest, updateRequest } = require('../controllers/request');
const router = express.Router();
const protect = require('../middleware/auth');

router.route('/').get(protect, getRequests);
router.route('/').post(postRequest);
router.route('/:id').put(updateRequest);
router.route('/:id/pay').post();

module.exports = router;