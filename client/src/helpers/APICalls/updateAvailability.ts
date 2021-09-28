import { Availability, AvailabilityAPIData } from '../../interface/Availability';
import { FetchOptions } from '../../interface/FetchOptions';

const updateAvailability = async (values: AvailabilityAPIData): Promise<Availability> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ values }),
    credentials: 'include',
  };
  return await fetch(`/availability/updateAvailability`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({ error: { message: 'Unable to connect to server. Please try again' } }));
};

export default updateAvailability;
