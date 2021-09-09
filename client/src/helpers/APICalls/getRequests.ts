/* eslint-disable prettier/prettier */
import { FetchOptions } from '../../interface/FetchOptions';
import { RequestData } from '../../interface/Request';

const getRequests = async (): Promise<RequestData[]> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch('/request', fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default getRequests;
