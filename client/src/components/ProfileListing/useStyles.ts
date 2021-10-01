import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles((theme) => ({
  listing: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    height: '100%',
  },
  firstName: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
  },
  describeYourself: {
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: 15,
    paddingBottom: 20,
    color: '#000000',
    fontFamily: "'Open Sans'",
    wordWrap: 'break-word',
    flexShrink: 0,
  },
  whereYouLive: {
    marginTop: 'auto',
    textAlign: 'center',
    color: '#000000',
    fontFamily: "'Open Sans'",
  },
  avatarHolder: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    height: '10rem',
    width: '10rem',
  },
  ratings: {
    padding: 10,
    justifyContent: 'center',
  },
}));

export default useStyles;
