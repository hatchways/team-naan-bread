import { FetchOptions } from '../../interface/FetchOptions';
import { SearchProfilesApiData } from '../../interface/ProfileApiData';
import { Search } from '../../interface/Search';

export async function searchProfiles(search: Search): Promise<SearchProfilesApiData> {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(search),
    credentials: 'include',
  };
  return await fetch(`/profile/profileSearch`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
