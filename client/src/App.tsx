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

import './App.css';
import NavBar from './components/NavBar/NavBar';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <NavBar />
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
                <Route path="*">
                  <Redirect to="/login" />
                </Route>
                <Route exact path="/my-sitters" component={MySitters} />
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
