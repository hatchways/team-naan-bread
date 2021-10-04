import React, { useState } from 'react';
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { Box, Button, Paper, TextField, Typography, CircularProgress } from '@material-ui/core';
import { EventLocation, PetEvent } from '../../interface/PetEvent';
import { DateTimePicker } from '@material-ui/pickers';

const newPetEvent = {} as PetEvent;
export default function PetEventForm(): JSX.Element {
  const [position, setPosition] = useState<EventLocation>();
  const [newDate, setNewDate] = useState<Date | null>(new Date());

  const [search, setSearch] = useState<google.maps.places.SearchBox>();
  const [name, setName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const onPlacesChanged = () => {
    console.log(search?.getPlaces());
    const newPlace = search?.getPlaces();
    if (newPlace !== undefined && newPlace[0] && newPlace[0].geometry && newPlace[0].geometry.location) {
      setPosition({ lng: newPlace[0].geometry.location.lng(), lat: newPlace[0].geometry.location.lat() });
      setAddress(`${newPlace[0].name}, ${newPlace[0].formatted_address}`);
    }
  };
  const onLoad = (searchInput: google.maps.places.SearchBox) => {
    setSearch(searchInput);
  };
  return (
    <Box padding={'10%'} alignItems="center">
      <Paper>
        <form>
          <Box textAlign={'center'} pt={3}>
            <Typography variant={'h4'}>Edit Form</Typography>
          </Box>

          <Box flexDirection="column" display="flex" alignItems="stretch" justifyContent="center" padding={'10%'}>
            <Box m={2}>
              <TextField fullWidth required label={'name'} variant="outlined" type="text" />
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
              <TextField fullWidth multiline variant="outlined" type="textarea" label="add a description" />
            </Box>
            <Box m={3}>
              <Button fullWidth size="large" variant="contained" color="primary" type="submit">
                set event
              </Button>
            </Box>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}
