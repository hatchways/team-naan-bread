require('dotenv').config();
const Profile = require('../models/Profile');
const asyncHandler = require('express-async-handler');
const stripe = require('stripe')(process.env.STRIPE);

exports.createCustomer = asyncHandler(async (req, res) => {
  const user = await Profile.findById(req.params.id);
  const { email } = user;

  try {
    const customer = await stripe.customers.create({email});
    
    // update user in DB
    user.customerId = customer.id;
    user.save();
    
    res.send(customer);
  }
  catch (err) {
    res.status(400);
    throw new Error(err, "Error creating customer");
  }
});

exports.retrieveCustomer = asyncHandler(async (req, res) => {
  try {
    const customer = await stripe.customers.retrieve(req.params.id);
    res.send(customer);
  }
  catch (err) {
    res.status(400);
    throw new Error(err, "Error retrieving customer");
  }
});

exports.attachPaymentMethod = asyncHandler(async (req, res) => {
  try {
    const paymentMethod = await stripe.paymentMethods.attach(
      req.body.paymentMethodId,
      {customer: req.body.customerId}
    );

    const customer = await stripe.customers.update(
      req.body.customerId,
      {
        invoice_settings: {
          default_payment_method: req.body.paymentMethodId,
        }
      }
    );
    
    res.send(paymentMethod);
  }
  catch (err) {
    res.status(400);
    throw new Error(err, 'Error attaching payment method');
  }
});

exports.retrievePaymentMethod = asyncHandler(async (req, res) => {
  try {
    const paymentMethod = await stripe.paymentMethods.retrieve(req.params.id);
    res.send(paymentMethod);
  }
  catch (err) {
    res.status(400);
    throw new Error(err, 'Error retrieving payment method');
  }
});

exports.payPetSitter = asyncHandler(async (req, res) => {
  let { 
    userId, 
    customerId, 
    sitterId,
    email, 
    name, 
    serviceId, 
    hourlyRate, 
    hours,
    successUrl,
    cancelUrl
  } = req.body;

  const orderId = req.params.id;

  try {  
    if (customerId === '' && userId) {
      const userProfile = await Profile.findById(userId);
      if (userProfile.customerId) {
        res.status(400);
        throw new Error("You can't create a new customer Id for an existing customer");
      } else if (email !== userProfile.email) {
        res.status(400);
        throw new Error('Email invalid');
      } else {
        const customer = await stripe.customers.create({email, name});
        userProfile.customerId = customer.id;
        customerId = customer.id;
        userProfile.save();
      }
    }
  
    if (serviceId === '' && sitterId) {
      const sitterProfile = await Profile.findById(sitterId);
      if (sitterProfile.serviceId) {
        res.status(400)
        throw new Error('The sitter has already registered a service');
      } else {
        const service = await stripe.products.create({
          name: "Pet sitting",
          unit_label: "Hour(s)",
        });
        sitterProfile.serviceId = service.id;
        serviceId = service.id;
        sitterProfile.save();
      }
    };

    const price = await stripe.prices.create({
      nickname: "Metered pett sitting price",
      product: serviceId,
      unit_amount: hourlyRate * 100,
      currency: "usd",
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer: customerId, 
      payment_method_types: ["card"],
      line_items: [
        {
          price: price.id,
          quantity: hours,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
    
    res.redirect(303, session.url);

  } catch (err) {
    res.status(400);
    throw new Error(err, "Error creating checkout session");
  }

});

exports.getStripePK = (req, res) => {
  try {
    const stripePK = { stripePK: process.env.STRIPEPK }
    res.send(stripePK);
  } catch (err) {
    res.status(400);
    throw new Error(err, "Error. Not authorized");
  }
};