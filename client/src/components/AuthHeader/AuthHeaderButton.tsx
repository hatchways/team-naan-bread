import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  btnText?: string;
  btnType?: string;
}
const AuthHeaderButton = ({ linkTo, btnText, btnType }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Link to={linkTo} className={classes.link}>
      <Button
        color={btnType == 'login' ? 'primary' : 'secondary'}
        className={btnType == 'login' ? classes.loginBtn : classes.signupBtn}
        variant="outlined"
      >
        {btnText}
      </Button>
    </Link>
  );
};
export default AuthHeaderButton;
