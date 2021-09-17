export interface Date {
  to: string;
  from: string;
}
[];
export interface Availability {
  [key: string]: Date;
}

export interface AvailabilityAPIData {
  _id: string;
  availability: Availability;
}
