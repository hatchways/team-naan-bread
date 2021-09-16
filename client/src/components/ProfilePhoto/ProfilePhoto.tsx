import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';
import { Paper, Typography, CssBaseline } from '@material-ui/core';
import ProfilePhotoForm from './ProfilePhotoForm/ProfilePhotoForm';
import useStyles from './useStyles';

export default function Profile(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  const history = useHistory();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <Grid container component="section" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={6} elevation={6} component={Paper} square className={classes.mainContainer}>
        <Typography className={classes.welcome} component="h2" variant="h5">
          Profile Photo
        </Typography>
        <ProfilePhotoForm loggedInUser={loggedInUser} />
      </Grid>
    </Grid>
  );
}
