import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';
import {
  Avatar,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  ListSubheader,
  Card,
  CardHeader,
  CardActions,
  CircularProgress,
} from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import { Link as routerLink } from 'react-router-dom';
import useStyles from './useStyles';
import { MapLatLng, PetEvent } from '../../interface/PetEvent';
import { requestNearbyEvents } from '../../helpers/APICalls/petEvent';

export default function NearByPetEvents(): JSX.Element {
  const [userPosition, setUserPosition] = useState<MapLatLng>();
  const [openInfoWindow, setOpenInfoWindow] = useState<string>();
  const [eventList, setEventList] = useState<PetEvent[]>();
  const classes = useStyles();
  useEffect(() => {
    async function requestEvents(coordinates: number[]) {
      const response = await requestNearbyEvents(coordinates);
      if (response.ok) {
        const data = await response.json();
        setEventList(data);
      }
    }
    navigator.geolocation.getCurrentPosition(function (position) {
      const newPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
      setUserPosition(newPosition);
      requestEvents([newPosition.lng, newPosition.lat]);
    });
  }, []);

  return (
    <Box marginBottom={'11%'} marginTop={'10%'} alignItems={'center'} marginLeft={'10%'} marginRight={'10%'}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Paper>
            <List>
              <ListSubheader>pet meetups near you</ListSubheader>
              <Box maxHeight={'400px'} overflow="auto">
                {eventList &&
                  eventList.map((petEvent) => (
                    <ListItem key={petEvent._id} button component={routerLink} to={`/event/${petEvent._id}`}>
                      <ListItemAvatar>
                        <Avatar>
                          <PetsIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={petEvent.name}
                        secondary={new Date(petEvent.eventDate).toLocaleDateString([], {
                          weekday: 'short',
                          year: '2-digit',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      />
                    </ListItem>
                  ))}
              </Box>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          {process.env.REACT_APP_GOOGLE_MAPS_API_KEY && (
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
              libraries={['places']}
              loadingElement={<CircularProgress />}
            >
              <GoogleMap mapContainerClassName={classes.mapContainerStyle} center={userPosition} zoom={10}>
                {eventList &&
                  eventList.map((petEvent) => (
                    <>
                      <Marker
                        key={petEvent._id}
                        icon={{
                          url: 'https://res.cloudinary.com/dalisapxa/image/upload/v1630880229/DEV/logo_nywmrf.png',
                        }}
                        position={{ lng: petEvent.location.coordinates[0], lat: petEvent.location.coordinates[1] }}
                        onClick={() => {
                          setOpenInfoWindow(petEvent._id);
                        }}
                      />
                      {openInfoWindow === petEvent._id && (
                        <InfoWindow
                          position={{ lng: petEvent.location.coordinates[0], lat: petEvent.location.coordinates[1] }}
                          onCloseClick={() => {
                            setOpenInfoWindow(undefined);
                          }}
                        >
                          <Card>
                            <CardHeader title={petEvent.name} />
                            <CardActions>
                              <Button
                                component={routerLink}
                                to={`/event/${petEvent._id}`}
                                fullWidth
                                size="small"
                                variant="contained"
                                color="primary"
                                type="submit"
                              >
                                see event
                              </Button>
                            </CardActions>
                          </Card>
                        </InfoWindow>
                      )}
                    </>
                  ))}
              </GoogleMap>
            </LoadScript>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
