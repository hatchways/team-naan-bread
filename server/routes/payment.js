const express = require('express');
const router = express.Router();
const { payPetSitter, getStripePk } = require('../controllers/payment');
const protect = require('../middleware/auth');

router.route('/:id/pay').post(payPetSitter);
router.route('/getStripePk/:id').get(protect, getStripePk);

module.exports = router;