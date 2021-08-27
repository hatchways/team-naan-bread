import Grid from '@material-ui/core/Grid';
import { Avatar, Box, Button, Paper, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import { useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSnackBar } from '../../../context/useSnackbarContext';
import { useDropzone } from 'react-dropzone';
import uploadProfilePhoto from '../../../helpers/APICalls/uploadProfilePhoto';
import { User } from '../../../interface/User';
import deleteProfilePhoto from '../../../helpers/APICalls/deleteProfilePhoto';
import { CircularProgress } from '@material-ui/core';
interface Props {
  loggedInUser: User;
}

export default function ProfilePhoto({ loggedInUser }: Props): JSX.Element {
  const [photo, setPhoto] = useState<string | undefined>('');
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();
  const [loading, setLoading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: 'image/jpeg, image/png',
    onDrop: (files) => {
      changePhoto(files[0]);
    },
  });

  useEffect(() => {
    setPhoto(loggedInUser.profile_photo_url);
  }, [loggedInUser.profile_photo_url]);

  const changePhoto = (file: File | null) => {
    setLoading(true);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        if (reader.result) {
          await uploadProfilePhoto(file);
          setLoading(false);
          updateSnackBarMessage('new profile photo added');
          setPhoto(reader.result.toString());
        }
      };
    }
  };
  const deletePhoto = async () => {
    setPhoto('');
    await deleteProfilePhoto();
    updateSnackBarMessage('profile photo deleted');
  };

  return (
    <Grid item>
      <Paper>
        <Box m={10} p={2} flexDirection="column" display="flex" alignItems="center" justifyContent="center">
          <Typography align="center" variant="h3">
            Profile photo
          </Typography>

          <Avatar src={photo} className={classes.photo} />
          <Box mb={10} display="flex" alignItems="center" justifyContent="center">
            <Typography align="center" variant="overline">
              be sure to use a photo that clearly shows your face
            </Typography>
          </Box>

          <Button
            disabled={loading}
            size="large"
            variant="outlined"
            color="secondary"
            endIcon={loading && <CircularProgress color="secondary" />}
          >
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
