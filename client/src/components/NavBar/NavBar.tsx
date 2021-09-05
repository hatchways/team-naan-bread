import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@material-ui/core';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { Link as routerLink } from 'react-router-dom';
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
                <img
                  src="https://res.cloudinary.com/dalisapxa/image/upload/v1630805884/DEV/logo_jizgel.png"
                  alt="loving sitter"
                />
              </Box>
            </div>

            <div className={classes.menuButton}>
              <Button>
                <Badge variant="dot" color="primary" invisible={false}>
                  <Typography>Notifications</Typography>
                </Badge>
              </Button>
            </div>
            <div className={classes.menuButton}>
              <Button>My jobs</Button>
            </div>

            <Button className={classes.menuButton}>Messages</Button>

            {loggedInUser && (
              <IconButton component={routerLink} to="/settings/profile" className={classes.menuButton}>
                <AvatarDisplay loggedIn user={loggedInUser} />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
}
