import Grid from '@material-ui/core/Grid';
import { Avatar, Box, Button, Paper, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSnackBar } from '../../../context/useSnackbarContext';
import { useDropzone } from 'react-dropzone';

export default function ProfilePhoto(): JSX.Element {
  const [photo, setPhoto] = useState<string | undefined>('');
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: 'image/jpeg, image/png',
    onDrop: (files) => {
      changePhoto(files[0]);
    },
  });

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
      <Paper>
        <Box m={10} p={2} flexDirection="column" display="flex" alignItems="center" justifyContent="center">
          <Typography align="center" variant="h3">
            Profile photo
          </Typography>
          <br />
          <Avatar alt="Remy Sharp" src={photo!.toString()} className={classes.photo} />
          <Button size="large" variant="outlined" color="secondary">
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p>Drag and drop some files here, or click to select files</p>
            </div>
          </Button>
          <br />
          <Button onClick={deletePhoto} startIcon={<DeleteIcon />} className={classes.delete_button}>
            delete photo
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}
