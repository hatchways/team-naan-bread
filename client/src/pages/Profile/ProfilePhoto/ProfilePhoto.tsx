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

          <Avatar alt="Remy Sharp" src={photo!.toString()} className={classes.photo} />
          <Box mb={10} display="flex" alignItems="center" justifyContent="center">
            <Typography align="center" variant="overline">
              be sure to use a photo that clearly shows your face
            </Typography>
          </Box>

          <Button size="large" variant="outlined" color="secondary">
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p>Upload a file from your device</p>
            </div>
          </Button>
          <Box m={3}>
            <Button onClick={deletePhoto} startIcon={<DeleteIcon />} className={classes.delete_button}>
              delete photo
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}