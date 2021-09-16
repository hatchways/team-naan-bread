import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../context/useAuthContext';
import Login from '../pages/Login/Login';
import Signup from '../pages/SignUp/SignUp';

export const ProtectedRoute = ({ ...routeProps }: RouteProps) => {
  const { loggedInUser } = useAuth();
  if (!loggedInUser && routeProps.location?.pathname === '/signup') {
    return <Route path="/signup" component={Signup} />;
  }
  if (!loggedInUser) {
    return <Route path="/login" component={Login} />;
  }
  return <Route {...routeProps} />;
};
