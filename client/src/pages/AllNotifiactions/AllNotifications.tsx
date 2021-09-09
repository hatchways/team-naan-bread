import { useAuth } from '../../context/useAuthContext';
import { Typography, Paper, ListItemText, Box, MenuList } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getAllNotifications } from '../../helpers/APICalls/Notification';
import { Notification } from '../../interface/Notification';
import NotificationsMenuItems from '../../components/NavBar/NotificationsMenu/NotificationsMenuItems/NotificationsMenuItems';

export default function AllNotifications(): JSX.Element {
  const { loggedInUser } = useAuth();

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
    <Box marginTop={'10%'} alignItems={'center'} marginLeft={'20%'} marginRight={'20%'}>
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
      </Paper>
    </Box>
  );
}
