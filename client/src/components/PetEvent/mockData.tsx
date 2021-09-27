import { PetEvent } from '../../interface/PetEvent';
import { ProfileApiData } from '../../interface/ProfileApiData';

const mockPetEventPage: PetEvent = {
  _id: '1',
  name: 'event name',
  eventDate: new Date(Date.now()),
  description: 'description description description description description description description description',
  location: { lat: 26.8206, lng: 30.8 },
  attendees: [
    { _id: '1', email: 'a@sample.com', firstName: 'attendee1' } as ProfileApiData,
    { _id: '1', email: 'sample@sample.com', firstName: 'attendee2' } as ProfileApiData,
    { _id: '1', email: 'sample@sample.com', firstName: 'attendee3' } as ProfileApiData,
  ],
  address: 'port said, Egypt',
  host: { _id: '1', email: 'sample@sample.com', firstName: 'hostName' } as ProfileApiData,
};

const mockEventList: PetEvent[] = [
  {
    _id: '1',
    name: 'event name',
    eventDate: new Date(Date.now()),
    description: 'description',
    location: { lat: 20, lng: 20 },
    attendees: [],
    host: 'hostId',
  },
  {
    _id: '2',
    name: 'second event name',
    eventDate: new Date(Date.now()),
    location: { lat: 30, lng: 30 },
    description: 'hello there this is alot of talk about our new horizon',
    attendees: [],
    host: 'hostId',
  },
  {
    _id: '3',
    name: 'third event name',
    eventDate: new Date(Date.now()),
    location: { lat: 25, lng: 25 },
    description: 'hello there this is alot more of talk about our new horizon',

    attendees: [],
    host: 'hostId',
  },
];

export { mockPetEventPage, mockEventList };
