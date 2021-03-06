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
  profilePhoto?: Photo;
}

export interface Photo {
  publicId: string;
  url: string;
}

export interface SearchProfilesApiData {
  profiles: Array<ProfileApiData>;
}

export interface CustomerProfile {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  requestsSubmitted: string[];
  customerId: string;
}

export interface Customer {
  id: string;
  email: string;
  invoice_settings: {
    default_payment_method: string;
  };
}
