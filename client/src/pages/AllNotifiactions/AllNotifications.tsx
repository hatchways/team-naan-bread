import { useAuth } from '../../context/useAuthContext';
import { Typography, Paper, ListItemText, Box, MenuList, Button } from '@material-ui/core';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { getAllNotifications, markBatchAsRead } from '../../helpers/APICalls/Notification';
import { Notification } from '../../interface/Notification';
import NotificationsMenuItems from '../../components/NavBar/NotificationsMenu/NotificationsMenuItems/NotificationsMenuItems';

export default function AllNotifications(): JSX.Element {
  const { loggedInUser } = useAuth();

  const [notifications, setNotifications] = useState<[Notification]>();
  const [lastId, setLastId] = useState<string>();
  const [isAllShown, setIsAllShown] = useState<boolean>(false);
  useEffect(() => {
    async function fetchNotifications() {
      if (loggedInUser) {
        const fetchedNotifications = await getAllNotifications();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        setNotifications(fetchedNotifications);
        if (fetchedNotifications.length > 1) {
          setLastId(fetchedNotifications[fetchedNotifications.length - 1]._id);
        }
      }
    }

    fetchNotifications();
  }, [loggedInUser]);

  useLayoutEffect(() => {
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
  }, [notifications]);

  return (
    <Box marginBottom={'11%'} marginTop={'10%'} alignItems={'center'} marginLeft={'10%'} marginRight={'10%'}>
      <Paper>
        <MenuList>
          <ListItemText
            primary={
              <Typography>
                <Box marginLeft={'30%'} marginRight={'30%'} fontSize={12} fontWeight={600} color="#000000">
                  all your notifications
                </Box>
              </Typography>
            }
          />
          {notifications && <NotificationsMenuItems notifications={notifications} />}
        </MenuList>
        <Box marginLeft={'30%'} textAlign="center" marginRight={'30%'} fontSize={12} fontWeight={600} color="#000000">
          {isAllShown ? (
            <Button>nothing more to show</Button>
          ) : (
            <Button
              color="primary"
              variant="outlined"
              onClick={async () => {
                const fetchedNotifications = await getAllNotifications(lastId);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                setNotifications((old) => [...old, ...fetchedNotifications]);

                if (fetchedNotifications.length > 1) {
                  setLastId(fetchedNotifications[fetchedNotifications.length - 1]._id);
                } else {
                  setIsAllShown(true);
                }
              }}
            >
              show more
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
