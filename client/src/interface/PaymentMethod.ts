export interface PaymentMethod {
  id: string;
  type: string;
  card: {
    brand: string;
    last4: string;
    exp_month: string;
    exp_year: string;
  };
}

export interface PaymentMethodError {
  message: string | undefined;
}
