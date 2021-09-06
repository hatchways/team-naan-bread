/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import useStyles from "./useStyles";

interface Props {
  dates: Array<Date>;
}

function BookingsDatePicker({ dates }: Props): JSX.Element {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const createDateObj = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${year}-${month}-${day}`
  }

  const bookingsDates = dates.map((booking: Date) => createDateObj(booking))

  return (
    <>
      <DatePicker 
        value={selectedDate}
        onChange={newDate => setSelectedDate(newDate)}
        variant="static"
        renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
          const date = day && createDateObj(day)
          const haveBookings = isInCurrentMonth && date && bookingsDates.includes(date)
          return <div className={haveBookings ? classes.bookingDay : undefined}>{dayComponent}</div>
        }}
      />
    </>
  );
}

export default BookingsDatePicker;