import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const login = async (email: string, password: string): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  };
  return await fetch(`/auth/login`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};
const loginDemo = (email: string, password: string): AuthApiData => {
  if (email == 'demo@email.com' && password == 'demoPassword') {
    const user = {
      success: {
        message: 'User registered successfully',
        user: {
          email: 'demo@gmail.com',
          username: 'demo',
          id: '127728hwhwhh',
          profilePhotoUrl: 'demo.jpg',
        },
        token: 'token',
      },
    };
    return user;
  }
  return { error: { message: 'Unable to connect to server. Please try again' } };
};
export { login, loginDemo };
