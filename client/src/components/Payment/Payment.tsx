import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import getCustomerProfile from '../../helpers/APICalls/getCustomerProfile';
import createCustomer from '../../helpers/APICalls/createCustomer';
import { CustomerProfile } from '../../interface/ProfileApiData';
import attachPaymentMethod from '../../helpers/APICalls/attachPaymentMethod';
import { PaymentMethod } from '../../interface/PaymentMethod';
import PaymentMethodCreate from './PaymentMethodCreate';

function Payment(): JSX.Element {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const { loggedInUser } = useAuth();
  const [userProfile, setUserProfile] = useState<CustomerProfile>({
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    requestsSubmitted: [],
    customerId: '',
    paymentMethodId: '',
  });
  const [customerPaymentMethod, setCustomerPaymentMethod] = useState<PaymentMethod>({
    id: '',
    type: '',
    card: {
      brand: '',
      last4: '',
    },
  });

  // Fetch user's profile.
  useEffect(() => {
    const fetchUser = async () => {
      if (loggedInUser) {
        const data: CustomerProfile = await getCustomerProfile(loggedInUser.id);
        setUserProfile(data);
      }
    };
    fetchUser();
  }, [loggedInUser]);

  if (userProfile.customerId.length) {
    // retrieve customer
    console.log(userProfile.customerId);
  }

  const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();

    // Make sure Stripe is loaded before submit
    if (!stripe || !elements) {
      return;
    }

    // Get the card information
    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      if (userProfile._id.length && userProfile.customerId === '') {
        const customer = await createCustomer(userProfile._id);
        setUserProfile({
          ...userProfile,
          customerId: customer.customerId,
        });
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: 'user name',
        },
      });

      if (error) {
        console.log(error);
      }
      if (paymentMethod) {
        const newPaymentMethod: PaymentMethod = await attachPaymentMethod(paymentMethod.id, userProfile.customerId);
        console.log(newPaymentMethod);
        setCustomerPaymentMethod(newPaymentMethod);
      }
    }
  };

  return (
    <Grid container component="section">
      <Grid item xs={9} elevation={6} component={Paper} square className={classes.mainContainer}>
        <Typography component="h2" variant="h5" className={classes.welcome}>
          Payment Methods
        </Typography>
        <PaymentMethodCreate handleSubmit={handleSubmit} />
      </Grid>
    </Grid>
  );
}

export default Payment;
