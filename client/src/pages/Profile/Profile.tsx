import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';
import { Box, Container, Link, MenuItem, MenuList } from '@material-ui/core';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';

export default function Profile(): JSX.Element {
  const { loggedInUser } = useAuth();

  const history = useHistory();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={6} sm={3}>
          <Box>
            <MenuList>
              <MenuItem>
                <Link href="#">Profile photo</Link>
              </MenuItem>
              <MenuItem>My account</MenuItem>
            </MenuList>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} container direction="column" justify="space-evenly" alignItems="center">
          <ProfilePhoto />
        </Grid>
      </Grid>
    </Container>
  );
}
