import React, { useState, useEffect } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import MySitters from './pages/MySitters/MySitters';
import Settings from './pages/Settings/Settings';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import getStripePK from './helpers/APICalls/getStripePk';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { StripePK } from './interface/Stripe';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import AllNotifications from './pages/AllNotifiactions/AllNotifications';

function App(): JSX.Element {
  const [stripePK, setStripePK] = useState('');

  const stripePromise = loadStripe(stripePK);

  useEffect(() => {
    const fetchStripePK = async () => {
      const stripePK: StripePK = await getStripePK();
      setStripePK(stripePK.stripePK);
    };
    fetchStripePK();
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BrowserRouter>
          <SnackBarProvider>
            <AuthProvider>
              <SocketProvider>
                <Elements stripe={stripePromise}>
                  <Route path="/">
                    <NavBar />
                  </Route>
                  <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route path="/settings" component={Settings} />
                    <Route exact path="/dashboard">
                      <Dashboard />
                    </Route>
                    <Route exact path="/notifications">
                      <AllNotifications />
                    </Route>
                    {/* <Route path="*">
                      <Redirect to="/login" />
                    </Route> */}
                    <Route exact path="/my-sitters" component={MySitters} />
                  </Switch>
                </Elements>
              </SocketProvider>
            </AuthProvider>
          </SnackBarProvider>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

export default App;
