import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import ProfileSearch from '../../components/ProfileSearch/ProfileSearch';
import ProfileListing from '../../components/ProfileListing/ProfileListing';
import Header from '../../components/Header/Header';
import Typography from '@material-ui/core/Typography';
import { searchProfiles } from '../../helpers/APICalls/searchProfiles';
import { SearchProfilesApiData } from '../../interface/ProfileApiData';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from '../../context/useAuthContext';
import WeekCheck from '../../components/WeekCheck/WeekCheck';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export default function Searcher(): JSX.Element {
  const { loggedInUser } = useAuth();
  const classes = useStyles();
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<SearchProfilesApiData>({ profiles: [] });
  const [checks, setChecks] = React.useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const times = [
    '12 am',
    '1 am',
    '2 am',
    '3 am',
    '4 am',
    '5 am',
    '6 am',
    '7 am',
    '8 am',
    '9 am',
    '10 am',
    '11 am',
    '12 pm',
    '1 pm',
    '2 pm',
    '3 pm',
    '4 pm',
    '5 pm',
    '6 pm',
    '7 pm',
    '8 pm',
    '9 pm',
    '10 pm',
    '11 pm',
  ];

  const handleTimeFrom = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFrom(event.target.value as string);
  };

  const handleTimeTo = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTo(event.target.value as string);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    searchProfiles({ search, checks, to, from }).then((data: SearchProfilesApiData) => {
      setResults(data);
    });
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecks({ ...checks, [event.target.name]: event.target.checked });
  };

  function checkResults() {
    if (results.profiles != []) {
      return (
        <Box className={classes.resultsBox}>
          {results.profiles.map((profile) => {
            return (
              <Grid key={profile.firstName} component={Paper} className={classes.profileCard}>
                <ProfileListing key={profile.firstName} profile={profile} />{' '}
                {profile._id === loggedInUser?.id && <>This is you!</>}
              </Grid>
            );
          })}
        </Box>
      );
    } else return <div></div>;
  }

  if (loggedInUser === undefined) return <CircularProgress />;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Header />

      <Grid item xs={12} sm={12} md={12} elevation={6} component={Paper} square>
        <Box className={classes.authWrapper}>
          <Grid item xs={12} sm={6} md={6} elevation={6} component={Paper} className={classes.formCard}>
            <Typography className={classes.welcome} component="h1" variant="h5">
              Search
            </Typography>
            <WeekCheck checks={checks} handleCheck={handleCheck} />
            <Box className={classes.outerTimeHolder}>
              <Box className={classes.innerTimeHolder}>
                <InputLabel id="label">From</InputLabel>
                <Select labelId="label" id="select" value={from} onChange={handleTimeFrom}>
                  {times.map((text) => (
                    <MenuItem key={text} value={text}>
                      {text}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              <Box className={classes.innerTimeHolder}>
                <InputLabel id="label">To</InputLabel>
                <Select labelId="label" id="select" value={to} onChange={handleTimeTo}>
                  {times.map(
                    (text) =>
                      text != from && (
                        <MenuItem key={text} value={text}>
                          {text}
                        </MenuItem>
                      ),
                  )}
                </Select>
              </Box>
            </Box>
            <ProfileSearch handleChange={handleChange} handleSubmit={handleSubmit} />
            <Box className={classes.buttonHolder}>
              <Button className={classes.button} variant="contained" onClick={handleSubmit}>
                Search
              </Button>
            </Box>
          </Grid>
          {checkResults()}
        </Box>
      </Grid>
    </Grid>
  );
}
