import { FetchOptions } from '../../interface/FetchOptions';
import { StripePK } from '../../interface/Stripe';

const getStripePK = async (): Promise<StripePK> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };

  return await fetch('/payment/getStripePK', fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to fecth Stripe Publisheable Key' },
    }));
};

export default getStripePK;
