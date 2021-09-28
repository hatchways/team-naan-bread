import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, CircularProgress } from '@material-ui/core';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import getCustomerProfile from '../../helpers/APICalls/getCustomerProfile';
import createCustomer from '../../helpers/APICalls/createCustomer';
import { CustomerProfile, Customer } from '../../interface/ProfileApiData';
import attachPaymentMethod from '../../helpers/APICalls/attachPaymentMethod';
import { PaymentMethod, PaymentMethodError } from '../../interface/PaymentMethod';
import PaymentMethodCreate from './PaymentMethodCreate';
import retrieveCustomer from '../../helpers/APICalls/retrieveCustomer';
import retrievePaymentMethod from '../../helpers/APICalls/retrievePaymentMethod';
import PaymentMethodDetails from './PaymentMethodDetails';

function Payment(): JSX.Element {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const { loggedInUser } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  const [userProfile, setUserProfile] = useState<CustomerProfile>({
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    requestsSubmitted: [],
    customerId: '',
  });

  const [customer, setCustomer] = useState<Customer>({
    id: '',
    email: '',
    invoice_settings: {
      default_payment_method: '',
    },
  });

  const [customerPaymentMethod, setCustomerPaymentMethod] = useState<PaymentMethod>({
    id: '',
    type: '',
    card: {
      brand: '',
      last4: '',
      exp_month: '',
      exp_year: '',
    },
  });

  const [error, setError] = useState<PaymentMethodError>({
    message: '',
  });

  // Fetch user's profile.
  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      if (loggedInUser) {
        const data: CustomerProfile = await getCustomerProfile(loggedInUser.id);
        setUserProfile(data);
        if (data.customerId.length) {
          const customer: Customer = await retrieveCustomer(data.customerId);
          setCustomer(customer);
          const paymentMethodId = customer?.invoice_settings?.default_payment_method;
          if (paymentMethodId) {
            const paymentMethod: PaymentMethod = await retrievePaymentMethod(paymentMethodId);
            setCustomerPaymentMethod({
              ...paymentMethod,
            });
          }
        } else {
          const customer: Customer = await createCustomer(data._id);
          setCustomer(customer);
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, [loggedInUser]);

  useEffect(() => {
    if (customerPaymentMethod.id) {
      setLoading(true);
      const attachNewPaymentMethod = async () => {
        await attachPaymentMethod(customerPaymentMethod.id, customer.id);
        setLoading(false);
      };
      attachNewPaymentMethod();
    }
  }, [customerPaymentMethod, customer.id]);

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

      if (error) {
        setError({ message: error.message });
      }

      if (paymentMethod) {
        const newPaymentMethod: PaymentMethod = await retrievePaymentMethod(paymentMethod?.id);
        setCustomerPaymentMethod(newPaymentMethod);
      }
    }
  };

  const resetPaymentMethod = () => {
    setCustomerPaymentMethod({
      ...customerPaymentMethod,
      id: '',
    });
  };

  return (
    <Grid container component="section" className={classes.paymentMethodDetails}>
      <Grid item xs={9} elevation={6} component={Paper} square className={classes.mainContainer}>
        <Typography component="h2" variant="h5" className={classes.welcome}>
          Payment Methods
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : customerPaymentMethod.id ? (
          <PaymentMethodDetails
            paymentMethod={customerPaymentMethod}
            user={userProfile}
            resetPaymentMethod={resetPaymentMethod}
          />
        ) : (
          <PaymentMethodCreate handleSubmit={handleSubmit} error={error} />
        )}
      </Grid>
    </Grid>
  );
}

export default Payment;
