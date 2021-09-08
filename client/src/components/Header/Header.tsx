import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import Box from '@material-ui/core/Box';
import logo from '../../Images/logo.png';
import Paper from '@material-ui/core/Paper';

//Temporary header as a placeholder. Feel free to change depending on what you want...

export default function Header(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container elevation={6} component={Paper} square>
      <Box className={classes.header}>
        <LogoHeader logo={logo} />
        <Link to={'/dashboard'}>
          <Button variant="contained">Dashboard</Button>
        </Link>
        <Link to={'/search'}>
          <Button variant="contained">Search Users</Button>
        </Link>
        <Link to={'/settings/editProfile'}>
          <Button variant="contained">Edit Profile</Button>
        </Link>
        <AuthHeader linkTo="/signup" btnText="SIGN UP" linkText="BECOME A SITTER" />
      </Box>
    </Grid>
  );
}
