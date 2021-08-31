import { ProfileApiData } from '../../interface/ProfileApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const getProfile = async (id: string): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
    credentials: 'include',
  };
  return await fetch(`/profile/findProfileById`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({ error: { message: 'Unable to connect to server. Please try again' } }));
};

export default getProfile;
