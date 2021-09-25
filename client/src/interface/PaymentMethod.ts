export interface PaymentMethod {
  id: string;
  type: string;
  card: {
    brand: string;
    last4: string;
  };
}
