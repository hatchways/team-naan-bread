import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { EmailPasswordInterface } from './EmailPasswordInterface';

interface Props {
  handleSubmit: (
    { email, password }: EmailPasswordInterface,
    { setStatus, setSubmitting }: FormikHelpers<EmailPasswordInterface>,
  ) => void;
}

export default function Login({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Box textAlign="center" className={classes.donotHaveAnAccount}>
            <Typography variant="h4" component="h4">
              Login
            </Typography>
          </Box>
          <div style={{ height: 40 }} />
          <TextField
            id="email"
            label={<Typography className={classes.label}>E-mail address</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="email"
            autoComplete="email"
            autoFocus
            variant="outlined"
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            id="password"
            label={<Typography className={classes.label}>Password</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            type="password"
            autoComplete="current-password"
            variant="outlined"
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
          />
          <Box textAlign="center">
            <Button type="submit" size="medium" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'LOGIN'}
            </Button>
            <div style={{ height: 80 }} />
            <Typography className={classes.donotHaveAnAccount}>
              Dont have an account?
              {
                <Link to="/signup" className={classes.signupLink}>
                  Sign up
                </Link>
              }
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
}
