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

export default function ChatScreen(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Box boxShadow={1} className={classes.header}>
        <LogoHeader logo={logo} />
        <ChatHeader linkTo="/signup" linkText="My Jobs" />
      </Box>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <SideBarContainer />
        {true && <ActiveChat />}
      </Grid>
    </>
  );
}
