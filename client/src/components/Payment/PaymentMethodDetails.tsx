import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
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
      <div className={`card-${paymentMethod.card.brand} card-brand`}></div>
      <Typography component="h3" variant="h3">
        **** **** **** {paymentMethod.card.last4}
      </Typography>
      <Typography className="exp-date">
        Exp. Date {paymentMethod.card.exp_month} / {paymentMethod.card.exp_year}
      </Typography>
      <Typography component="h3" variant="h3">
        {user.firstName} {user.lastName}
      </Typography>
      <Button
        onClick={resetPaymentMethod}
        type="submit"
        size="large"
        variant="outlined"
        color="primary"
        className={classes.submit}
      >
        Add new payment profile
      </Button>
    </Grid>
  );
}

export default PaymentMethodDetails;
