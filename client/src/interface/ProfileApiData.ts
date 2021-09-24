export interface ProfileApiData {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  phoneNumber: string;
  whereYouLive: string;
  describeYourself: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}

export interface CustomerProfile {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  requestsSubmitted: string[];
  customerId: string;
}
