import { ProfileApiData } from '../../interface/ProfileApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const updateProfile = async (values: ProfileApiData): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
    credentials: 'include',
  };
  return await fetch(`/profile/updateProfile`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({ error: { message: 'Unable to connect to server. Please try again' } }));
};

export default updateProfile;
