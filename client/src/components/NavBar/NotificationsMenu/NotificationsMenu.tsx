import useStyles from './useStyles';
import { useAuth } from '../../../context/useAuthContext';
import {
  Typography,
  Button,
  Badge,
  MenuItem,
  Menu,
  Paper,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItem,
  Box,
} from '@material-ui/core';
import { Notification } from '../../../interface/Notification';
import React, { useEffect, useState } from 'react';
import { getAllUnreadNotifications } from '../../../helpers/APICalls/Notification';

export default function NotificationsMenu(): JSX.Element {
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
        const fetchedNotifications = await getAllUnreadNotifications();
        setNotifications(fetchedNotifications);
      }
    }
    fetchNotifications();
  }, [loggedInUser]);

  return (
    <div className={classes.menuButton}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <Badge variant="dot" color="primary" invisible={notifications && notifications.length < 1}>
          <Typography variant="button">Notifications</Typography>
        </Badge>
      </Button>
      {notifications && notifications.length > 1 && (
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
      )}
    </div>
  );
}
