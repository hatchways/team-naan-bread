import { useAuth } from '../../../context/useAuthContext';
import { Typography, Button, Badge, Menu, Box } from '@material-ui/core';
import { Notification } from '../../../interface/Notification';
import React, { useEffect, useState } from 'react';
import { getAllUnreadNotifications, markAsRead } from '../../../helpers/APICalls/Notification';
import NotificationsMenuItems from './NotificationsMenuItems/NotificationsMenuItems';

export default function NotificationsMenu(): JSX.Element {
  const { loggedInUser } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    notifications?.map(async (notification) => {
      await markAsRead(notification._id);
    });

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
    <Box padding={1} marginLeft={1}>
      <Button aria-controls="notificationsMenu" aria-haspopup="true" onClick={handleClick}>
        <Badge variant="dot" color="primary" invisible={notifications && notifications.length < 1}>
          <Typography variant="button">Notifications</Typography>
        </Badge>
      </Button>
      {notifications && notifications.length >= 1 && (
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
            <NotificationsMenuItems notifications={notifications} />
          </Box>
        </Menu>
      )}
    </Box>
  );
}
