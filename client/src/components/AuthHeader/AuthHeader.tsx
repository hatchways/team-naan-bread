import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  asideText: string;
  btnText: string;
  linkText?: string;
  btnColor?: string;
}
const AuthHeader = ({ linkTo, asideText, btnText, linkText, btnColor }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={3} className={classes.authHeader}>
      <Link to={linkTo} className={classes.underlinedLink}>
        <Button color="default">{linkText}</Button>
      </Link>
      <Link to={linkTo} className={classes.link}>
        <Button color="primary" className={classes.loginBtn} variant="outlined">
          {btnText}
        </Button>
      </Link>
      <Link to={linkTo} className={classes.link}>
        <Button color="inherit" className={classes.signupBtn} variant="contained">
          {btnText}
        </Button>
      </Link>
    </Box>
  );
};

export default AuthHeader;
