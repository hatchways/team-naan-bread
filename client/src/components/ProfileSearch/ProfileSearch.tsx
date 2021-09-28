import { ChangeEvent } from 'react';
import useStyles from './useStyles';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

interface Props {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
}
const ProfileSearch = ({ handleChange, handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={classes.searchRoot}
        id="standard-basic"
        label="Name"
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default ProfileSearch;
