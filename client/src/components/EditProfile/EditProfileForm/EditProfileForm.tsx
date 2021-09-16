import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import TextField from '@material-ui/core/TextField';
import { CircularProgress } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import MuiPhoneNumber from 'material-ui-phone-number';

interface Props {
  handleSubmit: (
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
      setStatus,
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
  ) => void;
  userProfile: {
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
  };
}

export default function EditProfileForm({ userProfile, handleSubmit }: Props): JSX.Element {
  const classes = useStyles();
  if (userProfile._id === '') return <>Loading</>;
  return (
    <Formik
      initialValues={{
        _id: userProfile._id,
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        gender: userProfile.gender,
        birthDate: userProfile.birthDate,
        email: userProfile.email,
        phoneNumber: userProfile.phoneNumber,
        whereYouLive: userProfile.whereYouLive,
        describeYourself: userProfile.describeYourself,
        createdAt: userProfile.createdAt,
        updatedAt: userProfile.updatedAt,
        __v: userProfile.__v,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is not valid'),
        id: Yup.string(),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          {/* firstName */}
          <TextField
            key={'firstName'}
            variant="outlined"
            label={<Typography className={classes.label}>First Name</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name={'firstName'}
            autoComplete={'firstName'}
            defaultValue={values.firstName}
            onChange={handleChange}
          />
          {/* lastName */}
          <TextField
            key={'lastName'}
            variant="outlined"
            label={<Typography className={classes.label}>Last Name</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name={'lastName'}
            autoComplete={'lastName'}
            defaultValue={values.lastName}
            onChange={handleChange}
          />
          {/* Gender */}
          <TextField
            id="select"
            key={'gender'}
            variant="outlined"
            label={<Typography className={classes.label}>Gender</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.select },
            }}
            name={'gender'}
            autoComplete={'gender'}
            select
            defaultValue={values.gender}
            onChange={handleChange}
          >
            {['male', 'female', 'other', 'prefer not to say', ''].map((text) => (
              <MenuItem classes={{ selected: classes.menuItem }} key={text} value={text}>
                {text}
              </MenuItem>
            ))}
          </TextField>
          {/* BirthDate */}
          <TextField
            key={'birthDate'}
            variant="outlined"
            type="date"
            label={<Typography className={classes.label}>Birth Date</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name={'birthDate'}
            autoComplete={'birthDate'}
            defaultValue={values.birthDate}
            onChange={handleChange}
          />
          {/* Email */}
          <TextField
            key={'email'}
            variant="outlined"
            label={<Typography className={classes.label}>Email</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name={'email'}
            autoComplete={'email'}
            defaultValue={values.email}
            onChange={handleChange}
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
          />
          {/* Phone Number */}
          <MuiPhoneNumber
            key={'phoneNumber'}
            variant="outlined"
            defaultCountry={'us'}
            label={<Typography className={classes.label}>Phone Number</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              classes: { input: classes.inputs },
            }}
            value={values.phoneNumber}
            name="phoneNumber"
            id="phoneNumber"
            autoComplete={'phoneNumber'}
            onChange={(value) => {
              values.phoneNumber = value;
            }}
          />
          {/* Where You Live */}
          <TextField
            variant="outlined"
            key={'whereYouLive'}
            label={<Typography className={classes.label}>Where You Live</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name={'whereYouLive'}
            autoComplete={'whereYouLive'}
            defaultValue={values.whereYouLive}
            onChange={handleChange}
          />
          {/* Describe Yourself */}
          <TextField
            variant="outlined"
            key={'describeYourself'}
            label={<Typography className={classes.label}>Describe Yourself</Typography>}
            fullWidth
            margin="normal"
            multiline
            rows={3}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name={'describeYourself'}
            autoComplete={'describeYourself'}
            defaultValue={values.describeYourself}
            onChange={handleChange}
          />
          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Save'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
