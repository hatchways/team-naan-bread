/* eslint-disable prettier/prettier */
import { FetchOptions } from '../../interface/FetchOptions';
import { RequestData } from '../../interface/Request';

const updateRequest = async (id: string, state: string): Promise<RequestData[]> => {
  const fetchOptions: FetchOptions = {
    method: 'PUT',
    credentials: 'include',
  };
  return await fetch(`/request/${id}?state=${state}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to update request. Please try again' },
    }));
};

export default updateRequest;
