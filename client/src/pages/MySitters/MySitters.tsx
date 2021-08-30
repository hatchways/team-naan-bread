/* eslint-disable prettier/prettier */
import { useState, useEffect } from "react";
import getRequests from '../../helpers/APICalls/getRequests';
import { RequestData } from "../../interface/Request";
import { Container, Grid, Box } from '@material-ui/core';
import useStyles from "./useStyles";

export default function MySitters(): JSX.Element {
  const [requests, setRequests] = useState<RequestData[]>([]);

  useEffect(() => {
    getRequests()
      .then((data) => setRequests([data]));
  }, []);

  console.log(requests)

  return (
    <Container>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          My Sitters Page
        </Grid>
        <Box>
          <Grid item xs={12} sm={5}>
            Requests listings
          </Grid>
          <Grid item xs={12} sm={7}>
            Calendar
          </Grid>
        </Box>
      </Grid>
    </Container>
  )
};