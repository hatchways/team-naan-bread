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

interface Props {
  handleSubmit: any;
}

function PaymentMethodCreate({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
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
        Add payment method
      </Button>
    </form>
  );
}

export default PaymentMethodCreate;
