import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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
  CardContent,
  CardActions,
  Card,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { Link as routerLink, useParams } from 'react-router-dom';
import { ProfileApiData } from '../../interface/ProfileApiData';
import useStyles from './useStyles';
import { mockPetEventPage } from './mockData';

interface urlParams {
  id: string;
}

const petEvent = mockPetEventPage;

export default function PetEventPage(): JSX.Element {
  const classes = useStyles();
  const { id } = useParams<urlParams>();

  return (
    <Box marginBottom={'11%'} marginTop={'10%'} alignItems={'center'} marginLeft={'10%'} marginRight={'10%'}>
      <Grid justifyContent="center" container spacing={10}>
        <Grid item xs={12} md={6}>
          <Box maxHeight={'500px'} overflow="auto">
            <Card key={petEvent._id} variant="outlined">
              <CardContent>
                <Typography variant="h4">{petEvent.name}</Typography>
                <Typography>
                  {petEvent.eventDate.toLocaleDateString([], {
                    weekday: 'short',
                    year: '2-digit',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Typography>

                <Typography color="textSecondary">{petEvent.address}</Typography>
              </CardContent>
              <CardContent>
                <Typography>{petEvent.description}</Typography>
              </CardContent>
              <CardContent>
                <Typography variant="button" color="textSecondary" gutterBottom>
                  hosted by {typeof petEvent.host !== 'string' ? petEvent.host?.firstName : null}
                </Typography>
              </CardContent>
              <CardActions>
                <Button fullWidth size="large" variant="contained" color="primary" type="submit">
                  attend
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {process.env.REACT_APP_GOOGLE_MAPS_API_KEY && (
            <LoadScript
              loadingElement={<CircularProgress />}
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
              libraries={['places']}
            >
              <GoogleMap mapContainerClassName={classes.mapContainerStyle} center={petEvent.location} zoom={10}>
                <>
                  <Marker
                    icon={{
                      url: 'https://res.cloudinary.com/dalisapxa/image/upload/v1630880229/DEV/logo_nywmrf.png',
                    }}
                    position={petEvent.location}
                  />
                </>
              </GoogleMap>
            </LoadScript>
          )}
        </Grid>

        <Grid item xs={12} md={10}>
          <Paper color="primary">
            <List>
              <Box maxHeight={'400px'} overflow="auto">
                <ListSubheader> meetup attendees</ListSubheader>
                {petEvent.attendees.map((attendee: ProfileApiData) => (
                  <ListItem key={attendee._id} button component={routerLink} to={'#'}>
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>
                    <ListItemText> {attendee.firstName}</ListItemText>
                  </ListItem>
                ))}
              </Box>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
