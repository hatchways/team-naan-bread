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
import Conversation from './Conversation';
import Input from './Input';
import CurrentReceiver from './CurrentReceiver';

export default function ActiveChat(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={9} md={9} className={classes.activeChatContainer}>
      <CurrentReceiver />
      <Conversation />
      <Input />
    </Grid>
  );
}
