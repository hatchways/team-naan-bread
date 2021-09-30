import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { deleteEventById } from '../../helpers/APICalls/petEvent';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

interface Props {
  eventId: string;
}

export default function DeleteEventButton({ eventId }: Props) {
  const [open, setOpen] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteEvent = async () => {
    setLoadingDelete(true);
    await deleteEventById(eventId);
    setLoadingDelete(false);
    setOpen(false);
    history.push('/events');
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        delete
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="delete-event-dialog-title">
        <DialogTitle id="delete-event-dialog-title">{'are you sure you want to delete this event ?'}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} disabled={loadingDelete}>
            No, take me back
          </Button>
          <Button
            onClick={async () => {
              await deleteEvent();
            }}
            color="primary"
            autoFocus
            endIcon={loadingDelete && <CircularProgress size={10} />}
            disabled={loadingDelete}
          >
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
