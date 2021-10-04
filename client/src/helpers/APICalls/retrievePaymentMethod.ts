import { FetchOptions } from '../../interface/FetchOptions';
import { PaymentMethod } from '../../interface/PaymentMethod';

const retrievePaymentMethod = async (id: string): Promise<PaymentMethod> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/payment/retrieve-payment-method/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default retrievePaymentMethod;
