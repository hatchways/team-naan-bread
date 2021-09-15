import { Button, Avatar, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import image from '../../helpers/image';

const ChatHeaderButton = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid item xs={3} sm={6} md={2} className={classes.avatarContainer}>
      <Avatar src={image} className={classes.large} />
    </Grid>
  );
};
export default ChatHeaderButton;
