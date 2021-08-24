import Grid from '@material-ui/core/Grid';
import { Avatar, Button, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSnackBar } from '../../../context/useSnackbarContext';

export default function ProfilePhoto(): JSX.Element {
  const [photo, setPhoto] = useState<string | undefined>('');
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();

  const changePhoto = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          setPhoto(reader.result.toString());
          updateSnackBarMessage('new profile photo added');
        }
      };
    }
  };
  const deletePhoto = () => {
    setPhoto('');
    updateSnackBarMessage('profile photo deleted');
  };

  return (
    <Grid item>
      <Typography align="center" variant="h3">
        Profile photo
      </Typography>
      <Avatar alt="Remy Sharp" src={photo!.toString()} className={classes.photo} />
      <input
        onChange={(e) => {
          const { target } = e;
          if (target) {
            if (target.files) {
              changePhoto(target.files[0]);
            }
          }
        }}
        className={classes.input}
        accept="image/*"
        id="contained-button-file"
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button size="large" variant="outlined" color="secondary" component="span">
          Upload a file from your device
        </Button>
      </label>
      <br />
      <Button onClick={deletePhoto} startIcon={<DeleteIcon />} className={classes.delete_button}>
        delete photo
      </Button>
    </Grid>
  );
}
