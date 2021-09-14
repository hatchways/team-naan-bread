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
import moment from 'moment';
import SenderBubble from './SenderBubble';
import ReceiverBubble from './ReceiverBubble';

export default function Conversation(): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={classes.conversation}>
      {['Hello', 'yes o', 'hey'].map((message, i) => {
        // const time = moment(message.createdAt).format("h:mm");
        return true ? <SenderBubble key={'SenderBubble' + i} /> : <ReceiverBubble key={'OtherUserBubble' + i} />;
      })}
    </Box>
  );
}
