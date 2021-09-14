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
import SideBarContainer from './SideBarContainer';
import ActiveChat from './ActiveChat';

export default function Input(): JSX.Element {
  const classes = useStyles();

  return (
    <Box boxShadow={2} className={classes.activeChatHeader}>
      <Box className={classes.activeChatHeaderBadge}>
        <BadgeAvatar />
        <Typography variant="h6" style={{ marginLeft: 10 }}>
          Inbox Message
        </Typography>
      </Box>
      <MoreHorizIcon className={classes.moreHorizonIcon} />
    </Box>
  );
}
