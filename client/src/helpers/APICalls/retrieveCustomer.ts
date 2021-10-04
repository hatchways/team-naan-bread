import { FetchOptions } from '../../interface/FetchOptions';
import { Customer } from '../../interface/ProfileApiData';

const retrieveCustomer = async (id: string): Promise<Customer> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/payment/${id}/retrieve-customer`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default retrieveCustomer;
