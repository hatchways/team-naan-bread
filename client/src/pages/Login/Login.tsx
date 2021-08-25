import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { EmailPasswordInterface } from './LoginForm/EmailPasswordInterface';
import logo from '../../Images/logo.png';

export default function Login(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: EmailPasswordInterface,
    { setSubmitting }: FormikHelpers<EmailPasswordInterface>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} elevation={6} component={Paper} square>
        <Box className={classes.authWrapper}>
          <Grid container elevation={6} component={Paper} square>
            <Box className={classes.header}>
              <LogoHeader logo={logo} />
              <AuthHeader linkTo="/signup" btnText="SIGN UP" linkText="BECOME A SITTER" />
            </Box>
          </Grid>
          <Grid container xs={12} sm={6} md={6} elevation={6} component={Paper} className={classes.formCard}>
            <Grid item xs={12} sm={8} md={8} className={classes.formContainer}>
              <LoginForm handleSubmit={handleSubmit} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
