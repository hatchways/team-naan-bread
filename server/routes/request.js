const express = require('express');
const { getRequests, postRequest } = require('../controllers/request');
const router = express.Router();
const protect = require('../middleware/auth');

router.route('/').get(getRequests);
router.route('/').post(postRequest);
router.route('/:id').put(postRequest);

module.exports = router;