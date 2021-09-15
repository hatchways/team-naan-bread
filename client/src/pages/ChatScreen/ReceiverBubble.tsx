import { Avatar, Box, Typography } from '@material-ui/core';
import image from '../../helpers/image';
import useStyles from './useStyles';

export default function ReceiverBubble(): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={classes.receiverRoot}>
      <Avatar alt={'otherUser.username'} src={image} className={classes.avatar}></Avatar>
      <Box>
        <Typography className={classes.usernameDate}>
          {'otherUser.username'} {'time'}
        </Typography>
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{'text'}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
