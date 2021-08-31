export interface User {
  email: string;
  username: string;
  id: string;
  profilePhotoUrl?: string | undefined;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
