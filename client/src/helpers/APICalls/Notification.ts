import { FetchOptions } from '../../interface/FetchOptions';
import { Notification } from '../../interface/Notification';

const getAllNotifications = async (): Promise<[Notification]> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/notification/all`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({ error: { message: 'Unable to connect to server. Please try again' } }));
};

export default getAllNotifications;
