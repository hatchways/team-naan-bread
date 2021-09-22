import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Paper, Button } from '@material-ui/core';
import { CardElement } from '@stripe/react-stripe-js';
import useStyles from './useStyles';

function Payment(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container component="section">
      <Grid item xs={6} elevation={6} component={Paper} square className={classes.mainContainer}>
        <Typography component="h2" variant="h5" className={classes.welcome}>
          Payment Methods
        </Typography>
        <CardElement
          className={classes.creditCard}
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
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
      </Grid>
    </Grid>
  );
}

export default Payment;
