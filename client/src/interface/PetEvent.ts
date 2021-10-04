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

export interface MapLatLng {
  lat: number;
  lng: number;
}

export interface EventLocation {
  coordinates: number[];
  type?: string;
}
