import { Avatar, Box, Typography } from '@material-ui/core';
import image from '../../helpers/image';
import useStyles from './useStyles';
export default function SenderBubble(): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={classes.senderBubbleRoot}>
      <Typography className={classes.date}>{'time'}</Typography>
      <Box className={classes.bubble}>
        <Typography className={classes.text}>{'text'}</Typography>
      </Box>
      <Avatar alt={'otherUser.username'} src={image} className={classes.avatar} />
    </Box>
  );
}
