import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SettingsMenu from '../../components/SettingsMenu/SettingsMenu';
import EditProfile from '../../components/EditProfile/EditProfile';
import useStyles from '../../components/EditProfile/useStyles';

function Settings(): JSX.Element {
  const classes = useStyles();
  const { path, url } = useRouteMatch();

  return (
    <Container component="main" className={classes.root}>
      <Grid item xs={3}>
        <SettingsMenu url={url} />
      </Grid>
      <Grid item xs={9}>
        <Switch>
          <Route path={`${path}/edit-profile`} component={EditProfile} />
          {/* <Route path="/profile-photo" component={EditProfileForm} /> */}
        </Switch>
      </Grid>
    </Container>
  );
}

export default Settings;
