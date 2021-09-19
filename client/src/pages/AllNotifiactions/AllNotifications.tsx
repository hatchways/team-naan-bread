import { useAuth } from '../../context/useAuthContext';
import { Typography, Paper, ListItemText, Box, MenuList, ListItemAvatar, Avatar, MenuItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getAllNotifications, markBatchAsRead } from '../../helpers/APICalls/Notification';
import { Notification } from '../../interface/Notification';
import NotificationsMenuItems from '../../components/NavBar/NotificationsMenu/NotificationsMenuItems/NotificationsMenuItems';
import { Skeleton } from '@material-ui/lab';

export default function AllNotifications(): JSX.Element {
  const { loggedInUser } = useAuth();

  const [notifications, setNotifications] = useState<Notification[]>();
  useEffect(() => {
    async function fetchNotifications() {
      if (loggedInUser) {
        const fetchedNotifications = await getAllNotifications();
        setNotifications(fetchedNotifications);
      }
    }
    fetchNotifications();

    async function markAllNotificationsAsRead() {
      const notificationIds: string[] = [];
      notifications?.forEach((notification) => {
        if (!notification.read) {
          notificationIds.push(notification._id);
        }
      });
      if (notificationIds != []) {
        await markBatchAsRead(notificationIds);
      }
    }
    markAllNotificationsAsRead();
  }, [notifications, loggedInUser]);

  return (
    <Box marginTop={'10%'} alignItems={'center'} marginLeft={'10%'} marginRight={'10%'}>
      <Paper>
        <MenuList>
          <ListItemText
            primary={
              <Typography>
                <Box textAlign="center" fontSize={12} fontWeight={600} color="#000000">
                  all your notifications
                </Box>
              </Typography>
            }
          />
          {notifications ? (
            <NotificationsMenuItems notifications={notifications} />
          ) : (
            <Box>
              {[...Array(4)].map((x, i) => (
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
        </MenuList>
      </Paper>
    </Box>
  );
}
