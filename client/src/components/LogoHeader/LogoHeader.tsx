import useStyles from './useStyles';
import { CardMedia, Box } from '@material-ui/core';

interface Props {
  logo: string;
}

const LogoHeader = ({ logo }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={3} className={classes.logoHeader}>
      <CardMedia component="img" src={logo} />
    </Box>
  );
};

export default LogoHeader;
