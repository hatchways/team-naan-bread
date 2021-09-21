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
  const res = await (`/notification/all?id=${lastId}`, fetchOptions)
  return res.json();
};

const getAllUnreadNotifications = async (): Promise<Notification[]> => {
  const res = await fetch(`/notification/all-unread`, fetchOptions);
  return res.json();
};

const markAsRead = async (id: string) => {
  return await fetch(`/notification/seen/${id}`, postFetchOptions);
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
