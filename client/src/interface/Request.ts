export interface RequestData {
  _id: string;
  accepted: boolean;
  declined: boolean;
  paid: boolean;
  user: RequestUser;
  sitter: RequestUser;
  start: Date;
  end: Date;
  offset: number;
}

export interface RequestUser {
  firstName: string;
  lastName: string;
  profilePhoto: {
    url: string;
  };
}
