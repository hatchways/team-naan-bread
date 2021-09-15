export interface date {
  to: string;
  from: string;
}
[];
export interface Availability {
  [key: string]: date;
}

export interface AvailabilityAPIData {
  _id: string;
  availability: Availability;
}
