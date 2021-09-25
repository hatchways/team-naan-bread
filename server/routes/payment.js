const express = require('express');
const router = express.Router();
const { 
  payPetSitter, 
  getStripePK, 
  createCustomer,
  retrieveCustomer,
  attachPaymentMethod,
  retrievePaymentMethod } = require('../controllers/payment');

router.route('/:id/pay').post(payPetSitter);
router.route('/getStripePK').get(getStripePK);
router.route('/:id/create-customer').post(createCustomer);
router.route('/:id/retrieve-customer').get(retrieveCustomer);
router.route('/attach-payment-method').post(attachPaymentMethod);
router.route('/retrieve-payment-method/:id').get(retrievePaymentMethod);

module.exports = router;