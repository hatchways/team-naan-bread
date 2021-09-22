import { Avatar, Box, Button, Typography } from '@material-ui/core';
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

export default function ProfilePhotoForm({ loggedInUser }: Props): JSX.Element {
  const [photo, setPhoto] = useState<string | undefined>('');
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: 'image/jpeg, image/png',
    onDrop: (files) => {
      changePhoto(files[0]);
    },
  });

  useEffect(() => {
    setPhoto(loggedInUser.profilePhotoUrl);
  }, [loggedInUser.profilePhotoUrl]);

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
    setLoadingDelete(true);
    await deleteProfilePhoto();
    setPhoto('');
    setLoadingDelete(false);
    updateSnackBarMessage('profile photo deleted');
  };

  return (
    <Box className={classes.root}>
      <Box flexDirection="column" display="flex" alignItems="center" justifyContent="center">
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
          color="primary"
          endIcon={loading && <CircularProgress size={18} color="primary" />}
        >
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Upload a file from your device</p>
          </div>
        </Button>
        <Box m={3}>
          <Button
            disabled={loadingDelete}
            onClick={deletePhoto}
            startIcon={loadingDelete ? <CircularProgress size={12} /> : <DeleteIcon />}
            className={classes.delete_button}
          >
            delete photo
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
