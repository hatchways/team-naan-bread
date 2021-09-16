import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import EditProfile from './pages/Settings/EditProfile/EditProfile';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import MySitters from './pages/MySitters/MySitters';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { TourProvider } from '@reactour/tour';
import { steps } from './helpers/Reactour/reactorSteps';

import './App.css';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BrowserRouter>
          <SnackBarProvider>
            <AuthProvider>
              <SocketProvider>
                <TourProvider steps={steps}>
                  <Switch>
                    <Route exact path="/settings/profile/">
                      <Profile />
                    </Route>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/settings/editProfile" component={EditProfile} />
                    <Route exact path="/dashboard">
                      <Dashboard />
                    </Route>
                    <Route exact path="/my-sitters" component={MySitters} />
                    <Route path="*">
                      <Redirect to="/login" />
                    </Route>
                  </Switch>
                </TourProvider>
              </SocketProvider>
            </AuthProvider>
          </SnackBarProvider>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

export default App;
