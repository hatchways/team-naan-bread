import { PaymentMethod } from '../../interface/PaymentMethod';
import { FetchOptions } from '../../interface/FetchOptions';

const attachPaymentMethod = async (paymentMethodId: string, customerId: string): Promise<PaymentMethod> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      paymentMethodId,
      customerId,
    }),
    credentials: 'include',
  };
  return await fetch('/payment/attach-payment-method', fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default attachPaymentMethod;
