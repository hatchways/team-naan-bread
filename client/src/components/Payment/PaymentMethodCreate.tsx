import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { CardElement } from '@stripe/react-stripe-js';
import useStyles from './useStyles';

interface Props {
  handleSubmit: any;
  error: {
    message: string | undefined;
  };
}

function PaymentMethodCreate({ handleSubmit, error }: Props): JSX.Element {
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
      <Typography component="p" className={classes.errorMessage}>
        {error.message ? error.message : null}
      </Typography>
      <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
        Add payment method
      </Button>
    </form>
  );
}

export default PaymentMethodCreate;
