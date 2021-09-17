import { FetchOptions } from '../../interface/FetchOptions';
import { Notification } from '../../interface/Notification';

const fetchOptions: FetchOptions = {
  method: 'GET',
  credentials: 'include',
};
const postFetchOptions: FetchOptions = {
  method: 'POST',
  credentials: 'include',
};

const getAllNotifications = async (lastId?: string): Promise<Notification[]> => {
  return await fetch(`/notification/all?id=${lastId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({ error: { message: 'Unable to connect to server. Please try again' } }));
};

const getAllUnreadNotifications = async (): Promise<Notification[]> => {
  return await fetch(`/notification/all-unread`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({ error: { message: 'Unable to connect to server. Please try again' } }));
};

const markAsRead = async (id: string) => {
  return await fetch(`/notification/seen/${id}`, postFetchOptions)
    .then((res) => res.json())
    .catch(() => ({ error: { message: 'Unable to connect to server. Please try again' } }));
};
const markBatchAsRead = async (notificationsIds: string[]) => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ notificationsIds }),
    credentials: 'include',
  };

  return await fetch(`/notification/seen-batch`, fetchOptions);
};

export { getAllNotifications, getAllUnreadNotifications, markAsRead, markBatchAsRead };
