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

const requestNearbyEvents = async (userCoordinates: number[]) => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userCoordinates }),
    credentials: 'include',
  };
  return await fetch(`/event/nearby`, fetchOptions);
};

const getOneEventById = async (id: string) => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/event/${id}`, fetchOptions);
};
const getOneSimpleEventById = async (id: string) => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/event/simple/${id}`, fetchOptions);
};

const attendEvent = async (eventId: string) => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    credentials: 'include',
  };
  return await fetch(`/event/attend/${eventId}`, fetchOptions);
};

const editEvent = async (eventId: string, bodyData: PetEvent) => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
    credentials: 'include',
  };
  return await fetch(`/event?id=${eventId}`, fetchOptions);
};

const deleteEventById = async (eventId: string) => {
  const fetchOptions: FetchOptions = {
    method: 'DELETE',
    credentials: 'include',
  };
  return await fetch(`/event/${eventId}`, fetchOptions);
};
const cancelEventAttendance = async (eventId: string) => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    credentials: 'include',
  };
  return await fetch(`/event/cancel/${eventId}`, fetchOptions);
};

export {
  createPetEvent,
  requestNearbyEvents,
  getOneEventById,
  attendEvent,
  editEvent,
  getOneSimpleEventById,
  deleteEventById,
  cancelEventAttendance,
};
