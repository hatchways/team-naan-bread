import { Container, Grid } from '@material-ui/core';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SettingsMenu from '../../components/SettingsMenu/SettingsMenu';
import EditProfile from '../../components/EditProfile/EditProfile';
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';
import Availability from '../../components/Availability/Availability';
import useStyles from './useStyles';

function Settings(): JSX.Element {
  const classes = useStyles();
  const { path, url } = useRouteMatch();

  return (
    <Container component="main" className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <SettingsMenu url={url} />
        </Grid>
        <Grid item xs={9}>
          <Switch>
            <Route exact path={`${path}`} component={EditProfile} />
            <Route path={`${path}/profile-photo`} component={ProfilePhoto} />
            <Route exact path={`${path}/availability`} component={Availability} />
          </Switch>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Settings;
