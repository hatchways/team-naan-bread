export interface User {
  email: string;
  username: string;
  profilePhotoUrl?: string | undefined;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
