import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import useStyles from './useStyles';

interface Props {
  paymentMethod: {
    id: string;
    type: string;
    card: {
      brand: string;
      last4: string;
      exp_month: string;
      exp_year: string;
    };
  };
  user: {
    firstName: string;
    lastName: string;
  };
  resetPaymentMethod: any;
}

function PaymentMethodDetails({ paymentMethod, user, resetPaymentMethod }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Grid item>
      <Typography>{paymentMethod.card.brand.toUpperCase()}</Typography>
      <Typography>**** **** **** {paymentMethod.card.last4}</Typography>
      <Typography>
        Exp. Date {paymentMethod.card.exp_month} / {paymentMethod.card.exp_year}
      </Typography>
      <Typography>
        {user.firstName} {user.lastName}
      </Typography>
      <Button
        onClick={resetPaymentMethod}
        type="submit"
        size="large"
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Add new payment profile
      </Button>
    </Grid>
  );
}

export default PaymentMethodDetails;
