import { Grid } from '@material-ui/core';
import useStyles from './useStyles';
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
