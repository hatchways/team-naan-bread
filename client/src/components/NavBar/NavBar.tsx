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
import React, { useEffect, useState } from 'react';
import { Notification } from '../../interface/Notification';
import getAllNotifications from '../../helpers/APICalls/Notification';
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
  const [notifications, setNotifications] = useState<[Notification]>();
  useEffect(() => {
    async function fetchNotifications() {
      if (loggedInUser) {
        const fetchedNotifications = await getAllNotifications();
        setNotifications(fetchedNotifications);
      }
    }
    fetchNotifications();
  }, [loggedInUser]);

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
                    {notifications &&
                      notifications.map((notification, index) => (
                        <MenuItem key={index} className={classes.notificationMenuItem} onClick={handleClose}>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar className={classes.notificationAvatar} variant="square" />
                            </ListItemAvatar>
                            <ListItemText
                              secondary={
                                <div>
                                  <Typography className={classes.notification}>{notification.title}</Typography>

                                  <Typography variant="button">{notification.notificationType}</Typography>
                                  <Typography className={classes.notification}>
                                    {new Date(notification.createdAt).toLocaleDateString()}
                                  </Typography>
                                </div>
                              }
                            />
                          </ListItem>
                        </MenuItem>
                      ))}
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
