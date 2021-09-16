import { useAuth } from '../../context/useAuthContext';
import { AppBar, Toolbar, Button, IconButton, Link, Box } from '@material-ui/core';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { Link as routerLink } from 'react-router-dom';
import NotificationsMenu from './NotificationsMenu/NotificationsMenu';
import AuthHeader from '../../components/AuthHeader/AuthHeader';

export default function NavBar(): JSX.Element {
  const { loggedInUser } = useAuth();

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
                <NotificationsMenu />
                <Box padding={1} marginLeft={1}>
                  <Button>My jobs</Button>
                </Box>
                <Box padding={1} marginLeft={1}>
                  <Button>Messages</Button>
                </Box>
                <Box padding={1} marginLeft={1}>
                  <Link component={routerLink} to="/my-sitters">
                    <Button>My Sitters</Button>
                  </Link>
                </Box>

                <Box padding={1} marginLeft={1}>
                  <IconButton component={routerLink} to="/settings">
                    <AvatarDisplay loggedIn user={loggedInUser} />
                  </IconButton>
                </Box>
              </>
            )}
            {!loggedInUser && (
              <>
                <AuthHeader linkTo="/signup" btnText="Sign up" linkText="Become a Sitter" />
              </>
            )}
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}
