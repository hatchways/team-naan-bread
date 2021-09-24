const express = require('express');
const router = express.Router();
const { 
  payPetSitter, 
  getStripePK, 
  createCustomer, 
  attachPaymentMethod } = require('../controllers/payment');
const protect = require('../middleware/auth');

router.route('/:id/pay').post(payPetSitter);
router.route('/getStripePK').get(getStripePK);
router.route('/:id/create-customer').post(createCustomer);
router.route('/attach-payment-method').post(attachPaymentMethod);

module.exports = router;