import React, { ChangeEvent, ReactFragment, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface Props {
  handleCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checks: {
    Monday: boolean;
    Tuesday: boolean;
    Wednesday: boolean;
    Thursday: boolean;
    Friday: boolean;
    Saturday: boolean;
    Sunday: boolean;
  };
}

export default function WeekCheck({ checks, handleCheck }: Props): JSX.Element {
  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={checks.Monday} onChange={handleCheck} name="Monday" color="primary" />}
        label="Monday"
      />
      <FormControlLabel
        control={<Checkbox checked={checks.Tuesday} onChange={handleCheck} name="Tuesday" color="primary" />}
        label="Tuesday"
      />
      <FormControlLabel
        control={<Checkbox checked={checks.Wednesday} onChange={handleCheck} name="Wednesday" color="primary" />}
        label="Wednesday"
      />
      <FormControlLabel
        control={<Checkbox checked={checks.Thursday} onChange={handleCheck} name="Thursday" color="primary" />}
        label="Thursday"
      />
      <FormControlLabel
        control={<Checkbox checked={checks.Friday} onChange={handleCheck} name="Friday" color="primary" />}
        label="Friday"
      />
      <FormControlLabel
        control={<Checkbox checked={checks.Saturday} onChange={handleCheck} name="Saturday" color="primary" />}
        label="Saturday"
      />
      <FormControlLabel
        control={<Checkbox checked={checks.Sunday} onChange={handleCheck} name="Sunday" color="primary" />}
        label="Sunday"
      />
    </FormGroup>
  );
}
