import {
  Grid,
  CssBaseline,
  FormControl,
  FilledInput,
  Avatar,
  Paper,
  Box,
  Typography,
  Divider,
  Badge,
} from '@material-ui/core';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import logo from '../../Images/logo.png';
import BadgeAvatar from '../../components/Chat/BadgeAvatar';
import useStyles from './useStyles';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import SideBar from '../../components/SideBar/SideBar';
import ChatContent from '../../components/Chat/ChatContent';
import Chat from '../../components/Chat/Chat';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import image from '../../helpers/image';
export default function SenderBubble(): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={classes.senderBubbleRoot}>
      <Typography className={classes.date}>{'time'}</Typography>
      <Box className={classes.bubble}>
        <Typography className={classes.text}>{'text'}</Typography>
      </Box>
      {true ? <Avatar alt={'otherUser.username'} src={image} className={classes.avatar}></Avatar> : null}
    </Box>
  );
}
