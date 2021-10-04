import { Customer } from '../../interface/ProfileApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const createCustomer = async (id: string): Promise<Customer> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    credentials: 'include',
  };
  return await fetch(`/payment/${id}/create-customer`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default createCustomer;
