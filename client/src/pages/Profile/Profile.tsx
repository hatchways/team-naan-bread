import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from '../../context/useAuthContext';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';
import { Box, Container, MenuItem, MenuList, Paper } from '@material-ui/core';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import { Link as RouterLink } from 'react-router-dom';
import EditProfileForm from '../Settings/EditProfile/EditProfileForm/EditProfileForm';
import { useEffect, useState } from 'react';
import getProfile from '../../helpers/APICalls/getProfile';
import { ProfileApiData } from '../../interface/ProfileApiData';
import { FormikHelpers } from 'formik';
import updateProfile from '../../helpers/APICalls/updateProfile';

export default function Profile(): JSX.Element {
  const { loggedInUser } = useAuth();
  const { path, url } = useRouteMatch();

  const profileMenu = [
    { text: 'Edit Profile', path: '/editProfile' },
    { text: 'Profile Photo', path: '/picture' },
    { text: 'Availability', path: '#' },
    { text: 'Payment', path: '#' },
    { text: 'Security', path: '#' },
  ];

  const history = useHistory();
  const [userProfile, setUserProfile] = useState<ProfileApiData>({
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: '',
    phoneNumber: '',
    whereYouLive: '',
    describeYourself: '',
    createdAt: '',
    updatedAt: '',
    __v: '',
  });

  //this will get the User's profile data using the getProfile API
  useEffect(() => {
    if (loggedInUser) {
      getProfile(loggedInUser.id).then((data: ProfileApiData) => {
        setUserProfile(data);
      });
    }
  }, [loggedInUser]);

  const handleSubmit = (
    {
      _id,
      email,
      firstName,
      lastName,
      gender,
      birthDate,
      phoneNumber,
      whereYouLive,
      describeYourself,
      createdAt,
      updatedAt,
      __v,
    }: ProfileApiData,
    { setSubmitting }: FormikHelpers<ProfileApiData>,
  ) => {
    setSubmitting(false);
    const body = {
      _id,
      email,
      firstName,
      lastName,
      gender,
      birthDate,
      phoneNumber,
      whereYouLive,
      describeYourself,
      createdAt,
      updatedAt,
      __v,
    };
    updateProfile(body).then((data: ProfileApiData) => {
      console.log(data);
    });
  };

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Box paddingTop={10}>
            <MenuList>
              {profileMenu.map((item, index) => (
                <MenuItem button component={RouterLink} to={`${url}${item.path}`} key={index}>
                  {item.text}
                </MenuItem>
              ))}
            </MenuList>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper>
            <Box m={5} p={2} flexDirection="column" display="flex" alignItems="center" justifyContent="center">
              <Route path={`${path}/picture`}>
                <h3>Change Photo</h3>

                <ProfilePhoto loggedInUser={loggedInUser} />
              </Route>
              <Route path={`${path}/editProfile`}>
                <h3>Edit Profile</h3>

                <EditProfileForm handleSubmit={handleSubmit} userProfile={userProfile} />
              </Route>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
