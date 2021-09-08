import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { AppBar, Toolbar, Button, IconButton, Link, Box } from '@material-ui/core';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { Link as routerLink } from 'react-router-dom';
import NotificationsMenu from './NotificationsMenu/NotificationsMenu';
export default function NavBar(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  return (
    <div className={classes.root}>
      {loggedInUser && (
        <AppBar className={classes.bar} color="secondary" position="static">
          <Toolbar>
            <div className={classes.title}>
              <Box display={{ xs: 'none', sm: 'block' }}>
                <Link component={routerLink} to="/dashboard">
                  <img
                    src="https://res.cloudinary.com/dalisapxa/image/upload/v1630805884/DEV/logo_jizgel.png"
                    alt="loving sitter"
                  />
                </Link>
              </Box>
            </div>

            <NotificationsMenu />
            <div className={classes.menuButton}>
              <Button>My jobs</Button>
            </div>

            <Button className={classes.menuButton}>Messages</Button>

            <IconButton component={routerLink} to="/settings/profile" className={classes.menuButton}>
              <AvatarDisplay loggedIn user={loggedInUser} />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
}
