import { Button, Avatar, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

const ChatHeaderButton = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid item xs={3} sm={6} md={2} className={classes.avatarContainer}>
      <Avatar
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QarHFR-ztiFkrO-eO7N7FP9cdH3XTEOBdg&usqp=CAU"
        className={classes.large}
      />
    </Grid>
  );
};
export default ChatHeaderButton;
