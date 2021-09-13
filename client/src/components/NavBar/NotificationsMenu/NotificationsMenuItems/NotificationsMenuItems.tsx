import useStyles from '../useStyles';
import { Typography, MenuItem, Paper, ListItemText, ListItemAvatar, Avatar, Box } from '@material-ui/core';
import { Notification } from '../../../../interface/Notification';

interface Props {
  notifications: [Notification];
}

export default function NotificationsMenuItems({ notifications }: Props): JSX.Element {
  const classes = useStyles();
  const defaultLogoURL = 'https://res.cloudinary.com/dalisapxa/image/upload/v1630880229/DEV/logo_nywmrf.png';

  return (
    <Box>
      <Paper>
        {notifications &&
          notifications.map((notification, index) => (
            <Box key={index} paddingLeft={'4px'}>
              <MenuItem>
                <ListItemAvatar>
                  <Avatar
                    src={notification.context ? notification.context.profilePhotoURL : defaultLogoURL}
                    variant="square"
                    className={classes.notificationAvatar}
                  />
                </ListItemAvatar>

                <ListItemText
                  secondary={
                    <Box>
                      <Typography>
                        <Box fontSize={12} fontWeight={600} color="#000000">
                          {notification.title}
                        </Box>
                      </Typography>

                      <Typography variant="button">
                        <Box fontSize={10}>{notification.notificationType}</Box>
                      </Typography>
                      <Typography>
                        <Box fontSize={12} fontWeight={600} color="#000000">
                          {new Date(notification.createdAt).toLocaleDateString()}
                        </Box>
                      </Typography>
                    </Box>
                  }
                />
              </MenuItem>
            </Box>
          ))}
      </Paper>
    </Box>
  );
}