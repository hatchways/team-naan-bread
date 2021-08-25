import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  btnText?: string;
}
const AuthHeaderButton = ({ linkTo, btnText }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Link to={linkTo} className={classes.link}>
      <Button color="primary" className={classes.btn} variant="outlined">
        {btnText}
      </Button>
    </Link>
  );
};
export default AuthHeaderButton;
