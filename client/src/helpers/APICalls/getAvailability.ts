import { Availability } from '../../interface/Availability';
import { FetchOptions } from '../../interface/FetchOptions';

const getAvailability = async (id: string): Promise<Availability> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
    credentials: 'include',
  };
  return await fetch(`/availability/findAvailabilityById`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({ error: { message: 'Unable to connect to server. Please try again' } }));
};

export default getAvailability;
