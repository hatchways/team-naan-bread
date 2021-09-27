import { FetchOptions } from '../../interface/FetchOptions';
import { PetEvent } from '../../interface/PetEvent';

const createPetEvent = async (bodyData: PetEvent) => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
    credentials: 'include',
  };

  return await fetch(`/event`, fetchOptions);
};

export { createPetEvent };
