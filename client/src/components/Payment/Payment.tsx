import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import getCustomerProfile from '../../helpers/APICalls/getCustomerProfile';
import { CustomerProfile } from '../../interface/ProfileApiData';

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

  console.log(userProfile.customerId);

  const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();

    // Make sure Stripe is loaded before submit
    if (!stripe || !elements) {
      return;
    }

    // Get the card information
    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: 'user name',
        },
      });
    }
  };

  return (
    <Grid container component="section">
      <Grid item xs={9} elevation={6} component={Paper} square className={classes.mainContainer}>
        <Typography component="h2" variant="h5" className={classes.welcome}>
          Payment Methods
        </Typography>
        <form onSubmit={handleSubmit}>
          <CardElement
            className={classes.creditCard}
            options={{
              style: {
                base: {
                  fontSize: '24px',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
            Add new payment profile
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

export default Payment;
