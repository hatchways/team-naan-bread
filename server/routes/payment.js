const express = require('express');
const router = express.Router();
const { payPetSitter, getStripePK, createCustomer } = require('../controllers/payment');
const protect = require('../middleware/auth');

router.route('/:id/pay').post(payPetSitter);
router.route('/getStripePK').get(getStripePK);
router.route('/:id/create-customer').post(createCustomer);

module.exports = router;