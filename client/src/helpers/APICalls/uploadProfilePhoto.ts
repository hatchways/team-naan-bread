import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const uploadProfilePhoto = async (image: File): Promise<AuthApiData> => {
  const formData = new FormData();
  formData.append('image', image);
  const fetchOptions: FetchOptions = {
    method: 'POST',
    body: formData,
    credentials: 'include',
  };
  console.log(formData);
  return await fetch(`/profile/upload/profile-photo`, fetchOptions)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default uploadProfilePhoto;
