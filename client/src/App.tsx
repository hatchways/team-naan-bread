import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
const steps = [
  {
    selector: '[data-tour="step-1"]',
    content: 'you can see your booking from here',
  },
  {
    selector: '[data-tour="step-2"]',
    content: 'you can click here to edit your profile',
  },
  {
    selector: '[data-tour="step-3"]',
    content: 'you can click here to add a picture of your self',
  },
];

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
                    {/* <Route path="*">
                    <Redirect to="/login" />
                  </Route> */}
                    <Route exact path="/my-sitters" component={MySitters} />
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
