import React, { ChangeEvent, useEffect, useState } from 'react';
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { Box, Button, Paper, TextField, Typography, CircularProgress } from '@material-ui/core';
import { DateTimePicker } from '@material-ui/pickers';

import { createPetEvent, editEvent, getOneSimpleEventById } from '../../helpers/APICalls/petEvent';
import { useSnackBar } from '../../context/useSnackbarContext';
import { useHistory, useParams } from 'react-router-dom';
import { PetEvent } from '../../interface/PetEvent';
import { useAuth } from '../../context/useAuthContext';

interface urlParams {
  eventID: string;
}

export default function PetEventForm(): JSX.Element {
  const [search, setSearch] = useState<google.maps.places.SearchBox>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingEvent, setIsLoadingEvent] = useState<boolean>(true);
  const [newPetMeetupEvent, setNewPetMeetupEvent] = useState<PetEvent>({} as PetEvent);

  const { updateSnackBarMessage } = useSnackBar();
  const history = useHistory();
  const { eventID } = useParams<urlParams>();
  const { loggedInUser } = useAuth();

  useEffect(() => {
    async function fetchEvent() {
      const response = await getOneSimpleEventById(eventID);
      if (response.ok) {
        const data = await response.json();
        setNewPetMeetupEvent(data);
        setIsLoadingEvent(false);

        if (loggedInUser && data.host !== loggedInUser?.id) {
          history.push('/events');
        }
      }
    }
    if (eventID) {
      fetchEvent();
    }
    setIsLoadingEvent(false);
  }, [loggedInUser, history, eventID]);

  const onPlacesChanged = () => {
    const newPlace = search?.getPlaces();
    setNewPetMeetupEvent((state: PetEvent) => {
      if (newPlace !== undefined && newPlace[0] && newPlace[0].geometry && newPlace[0].geometry.location) {
        state.location = {
          coordinates: [newPlace[0].geometry.location.lng(), newPlace[0].geometry.location.lat()],
          type: 'Point',
        };
        state.address = `${newPlace[0].name}, ${newPlace[0].formatted_address}`;
      }
      return state;
    });
  };
  const onLoad = (searchInput: google.maps.places.SearchBox) => {
    setSearch(searchInput);
  };

  const submitPetEventForm = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (newPetMeetupEvent) {
      let response;
      if (eventID) {
        response = await editEvent(eventID, newPetMeetupEvent);
      } else {
        response = await createPetEvent(newPetMeetupEvent);
      }
      if (response.ok) {
        updateSnackBarMessage('event created');
        const newPetEvent = await response.json();
        history.push(`/event/${newPetEvent._id}`);
      } else {
        updateSnackBarMessage('something went wrong');
      }
    }
    setIsLoading(false);
  };

  if (isLoadingEvent) {
    return (
      <Box padding="50%">
        <CircularProgress />
      </Box>
    );
  }
  if (!loggedInUser) {
    return (
      <Box padding="50%">
        <CircularProgress />
      </Box>
    );
  }
  if (!newPetMeetupEvent.name && eventID) {
    return (
      <Box padding="50%">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box padding={'10%'} alignItems="center">
      <Paper>
        <form onSubmit={submitPetEventForm}>
          <Box textAlign={'center'} pt={3}>
            <Typography variant={'h4'}>Edit Form</Typography>
          </Box>

          <Box flexDirection="column" display="flex" alignItems="stretch" justifyContent="center" padding={'10%'}>
            <Box m={2}>
              <TextField
                defaultValue={newPetMeetupEvent.name}
                onChange={(event) => {
                  setNewPetMeetupEvent((state: PetEvent) => {
                    state.name = event.target.value;
                    return state;
                  });
                }}
                fullWidth
                required
                label={'add a name'}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <Box m={2}>
              {process.env.REACT_APP_GOOGLE_MAPS_API_KEY && (
                <LoadScript
                  loadingElement={<CircularProgress />}
                  googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                  libraries={['places']}
                >
                  <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
                    <TextField
                      required
                      placeholder="where is the event ?"
                      label={'address'}
                      variant="outlined"
                      id="searchBox"
                      type="text"
                      fullWidth
                      defaultValue={newPetMeetupEvent.address}
                    />
                  </StandaloneSearchBox>
                </LoadScript>
              )}
            </Box>
            <Box m={2}>
              <DateTimePicker
                inputVariant="outlined"
                value={newPetMeetupEvent.eventDate}
                onChange={(date) => {
                  if (date) {
                    setNewPetMeetupEvent((state: PetEvent) => {
                      state.eventDate = date;
                      return state;
                    });
                  }
                }}
                label="when is the event ?"
                fullWidth
                required
              />
            </Box>
            <Box m={2}>
              <TextField
                onChange={(event) => {
                  setNewPetMeetupEvent((state: PetEvent) => {
                    state.description = event.target.value;
                    return state;
                  });
                }}
                fullWidth
                multiline
                variant="outlined"
                type="textarea"
                label="add a description"
                defaultValue={newPetMeetupEvent.description}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box m={3}>
              <Button
                endIcon={isLoading && <CircularProgress size={18} color="primary" />}
                disabled={isLoading}
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                type="submit"
              >
                set event
              </Button>
            </Box>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}
