export interface User {
  email: string;
  username: string;
  profile_photo_url?: string | undefined;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
