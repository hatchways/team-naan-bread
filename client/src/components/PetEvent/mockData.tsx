import { PetEvent } from '../../interface/PetEvent';

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

export { mockEventList };
