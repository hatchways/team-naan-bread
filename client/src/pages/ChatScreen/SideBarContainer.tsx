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

export default function SideBarContainer(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={3} md={3} className={classes.sideBarContainer}>
      <Box boxShadow={2} className={classes.chatHeader}>
        <Typography variant="h6" style={{ marginLeft: 10 }}>
          Inbox Message
        </Typography>
      </Box>
      <Box boxShadow={1} className={classes.sideBarChatList}>
        {[1, 2, 3, 4, 5, 7, 6, 8, 9].map((item) => (
          <Chat key={item} />
        ))}
      </Box>
    </Grid>
  );
}
