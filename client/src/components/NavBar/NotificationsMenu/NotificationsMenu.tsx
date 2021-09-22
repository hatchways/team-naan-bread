import { useAuth } from '../../../context/useAuthContext';
import {
  Typography,
  Button,
  Badge,
  Menu,
  Box,
  MenuItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { Notification } from '../../../interface/Notification';
import React, { useEffect, useState } from 'react';
import { getAllUnreadNotifications, markBatchAsRead } from '../../../helpers/APICalls/Notification';
import NotificationsMenuItems from './NotificationsMenuItems/NotificationsMenuItems';
import { Skeleton } from '@material-ui/lab';
import { Link as routerLink } from 'react-router-dom';
import { useSocket } from '../../../context/useSocketContext';

export default function NotificationsMenu(): JSX.Element {
  const { loggedInUser } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const notificationIds: string[] = [];
    notifications?.forEach((notification) => {
      if (!notification.read) {
        notificationIds.push(notification._id);
      }
    });
    setAnchorEl(event.currentTarget);

    if (notificationIds != []) {
      await markBatchAsRead(notificationIds);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { socket } = useSocket();

  const [notifications, setNotifications] = useState<Notification[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  useEffect(() => {
    async function fetchNotifications() {
      if (loggedInUser) {
        setIsFetching(true);
        const fetchedNotifications = await getAllUnreadNotifications();
        setNotifications(fetchedNotifications);
        setIsFetching(false);
      }
    }
    fetchNotifications();

    socket?.on('new-notification', (newNotification: Notification) => {
      setNotifications((oldNotificationsList) => [newNotification, ...(oldNotificationsList as Notification[])]);
    });
  }, [socket, loggedInUser]);

  return (
    <Box padding={1} marginLeft={1}>
      <Button
        aria-controls="notificationsMenu"
        aria-haspopup="true"
        onClick={async (e) => {
          await handleClick(e);
        }}
      >
        <Badge variant="dot" color="primary" invisible={notifications && notifications.length < 1}>
          <Typography variant="button">Notifications</Typography>
        </Badge>
      </Button>
      <Menu
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
        id="notificationsMenu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box
          display={{ xs: 'none', sm: 'block' }}
          height={0}
          width={0}
          borderLeft={'5px solid transparent'}
          borderRight={'5px solid transparent'}
          borderBottom={'5px solid black'}
          alignItems={'center'}
          marginLeft={'50%'}
          marginRight={'50%'}
        />

        <Box borderColor={'#000000'} borderTop={5}>
          {isFetching && (
            <Box width={400}>
              {[...Array(2)].map((x, i) => (
                <MenuItem key={i}>
                  <ListItemAvatar>
                    <Skeleton>
                      <Avatar variant="square" />
                    </Skeleton>
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography variant="h1">
                      <Skeleton animation="wave" />
                    </Typography>
                  </ListItemText>
                </MenuItem>
              ))}
            </Box>
          )}
          {notifications && notifications.length >= 1 && <NotificationsMenuItems notifications={notifications} />}
          <MenuItem component={routerLink} to={'/notifications'}>
            <ListItemText>
              <Box textAlign="center">show all notifications</Box>
            </ListItemText>
          </MenuItem>
        </Box>
      </Menu>
    </Box>
  );
}
