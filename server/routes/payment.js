const express = require('express');
const { paySitter } = require('../controllers/payment');
const router = express.Router();
const { payPetSitter } = require('../controllers/payment');

router.route('/:id/pay').post(payPetSitter);

module.exports = router;