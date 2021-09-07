import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Paper,
  Link,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItem,
  Box,
} from '@material-ui/core';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { Link as routerLink } from 'react-router-dom';
import React from 'react';
export default function NavBar(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

            <div className={classes.menuButton}>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Badge variant="dot" color="primary" invisible={false}>
                  <Typography variant="button">Notifications</Typography>
                </Badge>
              </Button>
              <Menu
                className={classes.menu}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Box display={{ xs: 'none', sm: 'block' }} className={classes.arrowUp} />
                <Box borderTop={5}>
                  <Paper>
                    <MenuItem className={classes.notificationMenuItem} onClick={handleClose}>
                      <ListItem>
                        <ListItemAvatar className={classes.listItemAvatar}>
                          <Avatar
                            className={classes.notificationAvatar}
                            variant="square"
                            src={`${loggedInUser.profilePhotoUrl}`}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          secondary={
                            <div>
                              <Typography className={classes.notification}>
                                Marry has requested your service for 2 hours
                              </Typography>

                              <Typography variant="button">request</Typography>
                              <Typography className={classes.notification}>
                                {new Date(Date.now()).toLocaleDateString()}
                              </Typography>
                            </div>
                          }
                        />
                      </ListItem>
                    </MenuItem>
                    <MenuItem component={routerLink} to="#">
                      <Box marginLeft="40%" marginRight="60%">
                        <Button color="primary" variant="outlined">
                          more
                        </Button>
                      </Box>
                    </MenuItem>
                  </Paper>
                </Box>
              </Menu>
            </div>
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
