import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    '& li': {
      backgroundColor: 'none',
      '&:hover': {
        backgroundColor: 'none',
      },
      '& a': {
        textDecoration: 'none',
        color: theme.palette.text.disabled,
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        '&:hover': {
          color: theme.palette.text.primary,
          fontWeight: 'bold',
        },
        '&:focus': {
          color: theme.palette.text.primary,
          fontWeight: 'bold',
        },
      },
    },
  },
}));

export default useStyles;
