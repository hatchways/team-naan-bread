import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles((theme) => ({
  weekday: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '20px',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
  },
  date: {},
  selects: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
  },
  select: {
    display: 'flex',
  },
  selectBox: {
    marginLeft: '10%',
    width: 100,
  },
}));

export default useStyles;
