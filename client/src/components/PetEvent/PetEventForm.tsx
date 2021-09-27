import React, { ChangeEvent, useState } from 'react';
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { Box, Button, Paper, TextField, Typography, CircularProgress } from '@material-ui/core';
import { DateTimePicker } from '@material-ui/pickers';

import { createPetEvent } from '../../helpers/APICalls/petEvent';
import { useSnackBar } from '../../context/useSnackbarContext';
import { useHistory } from 'react-router-dom';

export default function PetEventForm(): JSX.Element {
  const [coordinates, setCoordinates] = useState<number[]>();
  const [newDate, setNewDate] = useState<Date | null>(new Date());
  const [search, setSearch] = useState<google.maps.places.SearchBox>();
  const [name, setName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { updateSnackBarMessage } = useSnackBar();
  const history = useHistory();

  const onPlacesChanged = () => {
    console.log(search?.getPlaces());
    const newPlace = search?.getPlaces();
    if (newPlace !== undefined && newPlace[0] && newPlace[0].geometry && newPlace[0].geometry.location) {
      setCoordinates([newPlace[0].geometry.location.lng(), newPlace[0].geometry.location.lat()]);
      setAddress(`${newPlace[0].name}, ${newPlace[0].formatted_address}`);
    }
  };
  const onLoad = (searchInput: google.maps.places.SearchBox) => {
    setSearch(searchInput);
  };

  const submitPetEventForm = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name && newDate && coordinates) {
      setIsLoading(true);
      const response = await createPetEvent(name, newDate, coordinates, description, address);
      setIsLoading(false);
      // if (postEvent) updateSnackBarMessage('profile photo deleted');
      if (response.ok) {
        updateSnackBarMessage('event created');
        const newPetEvent = await response.json();
        console.log(newPetEvent._id);

        history.push(`/event/${newPetEvent._id}`);
      } else {
        updateSnackBarMessage('something went wrong');
      }
    }
  };

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
                onChange={(event) => {
                  setName(event.target.value);
                }}
                fullWidth
                required
                label={'name'}
                variant="outlined"
                type="text"
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
                    />
                  </StandaloneSearchBox>
                </LoadScript>
              )}
            </Box>
            <Box m={2}>
              <DateTimePicker
                inputVariant="outlined"
                value={newDate}
                onChange={(date) => {
                  setNewDate(date);
                }}
                label="when is the event ?"
                fullWidth
                required
              />
            </Box>
            <Box m={2}>
              <TextField
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                fullWidth
                multiline
                variant="outlined"
                type="textarea"
                label="add a description"
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
