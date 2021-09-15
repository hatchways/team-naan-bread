import { Box, Grid, Typography } from '@material-ui/core';
import Chat from '../../components/Chat/Chat';
import useStyles from './useStyles';

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
