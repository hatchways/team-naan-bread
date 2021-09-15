import { FilledInput, FormControl } from '@material-ui/core';
import useStyles from './useStyles';

export default function Input(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <form className={classes.inputRoot}>
        <FormControl fullWidth hiddenLabel>
          <FilledInput
            classes={{ root: classes.input }}
            disableUnderline
            placeholder="Type something..."
            value={''}
            name="text"
          />
        </FormControl>
      </form>
    </>
  );
}
