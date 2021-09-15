import { Box, CssBaseline, Grid } from '@material-ui/core';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import logo from '../../Images/logo.png';
import ActiveChat from './ActiveChat';
import SideBarContainer from './SideBarContainer';
import useStyles from './useStyles';

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
