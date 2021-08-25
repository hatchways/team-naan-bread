import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import AuthHeaderButton from './AuthHeaderButton';
interface Props {
  linkTo: string;
  btnText?: string;
  linkText?: string;
}
const AuthHeader = ({ linkTo, btnText, linkText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={2} className={classes.authHeader}>
      <Link to={linkTo} className={classes.underlinedLink}>
        <Button color="default">{linkText}</Button>
      </Link>
      <AuthHeaderButton linkTo={linkTo} btnText={btnText} />
    </Box>
  );
};

export default AuthHeader;
