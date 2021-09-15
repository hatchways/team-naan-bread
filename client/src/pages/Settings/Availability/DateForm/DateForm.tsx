import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

interface date {
  to: string;
  from: string;
}
interface Availability {
  [key: string]: date;
}

interface Props {
  date: string;
  availability: Availability;
  handleTimeFrom: (event: React.ChangeEvent<{ value: any }>, date: string) => void;
  handleTimeTo: (event: React.ChangeEvent<{ value: any }>, date: string) => void;
}

const times = [
  '',
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

const getDisabled = (val: string) => {
  if (val === '')
    return {
      disabled: true,
    };
  return {};
};

export default function DateForm({ date, availability, handleTimeFrom, handleTimeTo }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={classes.weekday}>
      <Box className={classes.date}>
        <Typography component="h1" variant="h5">
          {date}
        </Typography>
      </Box>
      <Box className={classes.selects}>
        <Box className={classes.select}>
          <InputLabel id="demo-simple-select-label" className={classes.label}>
            From
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className={classes.selectBox}
            variant="outlined"
            value={availability[date].from}
            onChange={(e) => {
              handleTimeFrom(e, date);
            }}
          >
            {times.map((time) => (
              <MenuItem key={'From' + time} value={time}>
                {time}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box className={classes.select}>
          <InputLabel id="demo-simple-select-label" className={classes.label}>
            To
          </InputLabel>
          <Select
            variant="outlined"
            {...getDisabled(availability[date].from)}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={availability[date].to}
            className={classes.selectBox}
            onChange={(e) => {
              handleTimeTo(e, date);
            }}
          >
            {times.map(
              (time) =>
                time > availability[date].from && (
                  <MenuItem key={'To' + time} value={time}>
                    {time}
                  </MenuItem>
                ),
            )}
          </Select>
        </Box>
      </Box>
    </Box>
  );
}
