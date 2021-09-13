import { Grid, Avatar, Paper, Box, Typography, Divider, Badge } from '@material-ui/core';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import logo from '../../Images/logo.png';
import BadgeAvatar from '../../components/Chat/BadgeAvatar';
import useStyles from './useStyles';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import SideBar from '../../components/SideBar/SideBar';
import ChatContent from '../../components/Chat/ChatContent';
import Chat from '../../components/Chat/Chat';

export default function ChatScreen(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={12} md={12} elevation={6} component={Paper} square>
        <Box className={classes.headerWrapper}>
          <Grid container elevation={6} component={Paper} square>
            <Box className={classes.header}>
              <LogoHeader logo={logo} />
              <ChatHeader linkTo="/signup" linkText="My Jobs" />
            </Box>
          </Grid>
          <Grid container component={Paper} elevation={1} square className={classes.detailsCard}>
            <Grid item xs={12} sm={3} md={3} className={classes.sideBarContainer}>
              <Box>
                <Box boxShadow={1} className={classes.sideBarHeader}>
                  <Typography variant="h5" component="h5">
                    {'Inbox Message'}
                  </Typography>
                </Box>
                <Box boxShadow={2} className={classes.chatContainer}>
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Chat key={item} />
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={9} md={9} className={classes.activeChat}>
              <Box boxShadow={1} className={classes.sideBarHeader}>
                <Typography variant="h5" component="h5">
                  Inbox Message
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
