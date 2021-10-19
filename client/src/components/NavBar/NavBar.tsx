import { useAuth } from '../../context/useAuthContext';
import { AppBar, Toolbar, Button, IconButton, Link, Box } from '@material-ui/core';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { Link as routerLink, useLocation } from 'react-router-dom';
import NotificationsMenu from './NotificationsMenu/NotificationsMenu';
import { useSocket } from '../../context/useSocketContext';
import { useEffect } from 'react';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import PetEventsNavbarMenu from './PetEventsNavbarMenu/PetEventsNavbarMenu';

export default function NavBar(): JSX.Element {
  const { loggedInUser } = useAuth();
  const { initSocket, disconnectSocket } = useSocket();
  const location = useLocation();

  let linkTo = '/login';
  let btnText = 'Login';
  if ('/login' === location.pathname) {
    linkTo = '/signup';
    btnText = 'Sign up';
  }
  useEffect(() => {
    initSocket();
  }, [initSocket]);

  useEffect(() => {
    return () => {
      disconnectSocket();
    };
  }, [disconnectSocket]);

  return (
    <Box flexGrow={1}>
      <AppBar color="secondary" position="static">
        <Box padding={1}>
          <Toolbar>
            <Box flexGrow={1} display={{ xs: 'none', sm: 'block' }}>
              <Link component={routerLink} to="/dashboard">
                <img
                  src="https://res.cloudinary.com/dalisapxa/image/upload/v1630805884/DEV/logo_jizgel.png"
                  alt="loving sitter"
                />
              </Link>
            </Box>

            {loggedInUser && (
              <>
                <Box padding={1} marginLeft={1}>
                  <Link component={routerLink} to="/dashboard">
                    <Button>Dashboard</Button>
                  </Link>
                </Box>
                <Box padding={1} marginLeft={1}>
                  <Link component={routerLink} to="/search">
                    <Button>Search</Button>
                  </Link>
                </Box>
                <NotificationsMenu />
                <Box padding={1} marginLeft={1}>
                  <Link component={routerLink} to="/my-sitters">
                    <Button>My Sitters</Button>
                  </Link>
                </Box>

                <PetEventsNavbarMenu />
                <Box padding={1} marginLeft={1}>
                  <IconButton component={routerLink} to="/settings">
                    <AvatarDisplay loggedIn user={loggedInUser} />
                  </IconButton>
                </Box>
              </>
            )}
            {!loggedInUser && (
              <>
                <AuthHeader linkTo={linkTo} btnText={btnText} linkText="Become a Sitter" />
              </>
            )}
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}
