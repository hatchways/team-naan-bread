const express = require('express');
const router = express.Router();
const { payPetSitter, getStripePK } = require('../controllers/payment');
const protect = require('../middleware/auth');

router.route('/:id/pay').post(payPetSitter);
router.route('/getStripePK').get(protect, getStripePK);

module.exports = router;