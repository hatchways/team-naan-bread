import { FetchOptions } from '../../interface/FetchOptions';

const createPetEvent = async (
  name: string,
  eventDate: Date | null,
  coordinates: number[],
  description?: string,
  address?: string,
) => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      eventDate,
      location: { type: 'Point', coordinates: coordinates },
      description,
      address,
    }),
    credentials: 'include',
  };

  return await fetch(`/event`, fetchOptions);
};

export { createPetEvent };
