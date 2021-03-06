import { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import EditProfileForm from './EditProfileForm/EditProfileForm';
import getProfile from '../../helpers/APICalls/getProfile';
import updateProfile from '../../helpers/APICalls/updateProfile';
import { ProfileApiData } from '../../interface/ProfileApiData';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Profile(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
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
    }: {
      _id: string;
      email: string;
      firstName: string;
      lastName: string;
      gender: string;
      birthDate: string;
      phoneNumber: string;
      whereYouLive: string;
      describeYourself: string;
      createdAt: string;
      updatedAt: string;
      __v: string;
    },
    {
      setSubmitting,
    }: FormikHelpers<{
      _id: string;
      email: string;
      firstName: string;
      lastName: string;
      gender: string;
      birthDate: string;
      phoneNumber: string;
      whereYouLive: string;
      describeYourself: string;
      createdAt: string;
      updatedAt: string;
      __v: string;
    }>,
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
    updateSnackBarMessage('Profile Updated');
  };

  if (!loggedInUser) return <CircularProgress />;

  return (
    <Grid container component="section" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} elevation={6} component={Paper} square className={classes.mainContainer}>
        <Typography className={classes.welcome} component="h2" variant="h5">
          Edit Profile
        </Typography>
        <EditProfileForm userProfile={userProfile} handleSubmit={handleSubmit} />
      </Grid>
    </Grid>
  );
}
