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
import { ProtectedRoute } from './context/protectedRoute';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import AllNotifications from './pages/AllNotifiactions/AllNotifications';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BrowserRouter>
          <SnackBarProvider>
            <AuthProvider>
              <SocketProvider>
                <NavBar />
                <Switch>
                  <ProtectedRoute exact path="/settings/profile/" component={Profile} />
                  <ProtectedRoute exact path="/login" component={Login} />
                  <ProtectedRoute exact path="/signup" component={Signup} />
                  <ProtectedRoute exact path="/settings/editProfile" component={EditProfile} />
                  <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                  <ProtectedRoute exact path="/notifications" component={AllNotifications} />
                  <ProtectedRoute exact path="/my-sitters" component={MySitters} />
                  <Route path="*">
                    <Redirect to="/login" />
                  </Route>
                </Switch>
              </SocketProvider>
            </AuthProvider>
          </SnackBarProvider>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

export default App;
