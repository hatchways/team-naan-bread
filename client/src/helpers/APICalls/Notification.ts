import { FetchOptions } from '../../interface/FetchOptions';
import { Notification } from '../../interface/Notification';

const fetchOptions: FetchOptions = {
  method: 'GET',
  credentials: 'include',
};

const getAllNotifications = async (): Promise<[Notification]> => {
  return await fetch(`/notification/all`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({ error: { message: 'Unable to connect to server. Please try again' } }));
};

const getAllUnreadNotifications = async (): Promise<[Notification]> => {
  return await fetch(`/notification/all-unread`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({ error: { message: 'Unable to connect to server. Please try again' } }));
};

export { getAllNotifications, getAllUnreadNotifications };
