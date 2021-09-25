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
  paymentMethod: any;
}

function PaymentMethodDetails(paymentMethod: Props): JSX.Element {
  const classes = useStyles();

  return <div>Payment Method Details</div>;
}

export default PaymentMethodDetails;
