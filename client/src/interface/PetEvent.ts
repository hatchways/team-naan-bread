import { ProfileApiData } from './ProfileApiData';

export interface PetEvent {
  _id: string;
  name: string;
  eventDate: Date;
  location: EventLocation;
  description?: string;
  address?: string;
  attendees: ProfileApiData[];
  host: ProfileApiData | string;
}

export interface EventLocation {
  lat: number;
  lng: number;
  address?: string;
}
