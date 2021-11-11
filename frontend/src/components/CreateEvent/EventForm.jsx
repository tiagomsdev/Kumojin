import React, { useState } from "react";
import { TextField, Button, Divider, Grid, Container } from "@material-ui/core";
//import {shiftTimezoneDateToUserDate} from "../../helpers/TimeZone";
import Moment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import moment from "moment";
import axios from "axios";
import {EventManagerUrl} from "../../common/constants";
import{parseCookies} from "nookies";

function EventForm({handleClose}) {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  return (
    <Container>
      <form onSubmit={(event) => {
          event.preventDefault();
          const newEvent = {
             name: eventName,
             description: eventDescription,
             startDate: startDate,
             endDate: endDate
          }
          handleCreateEvent(newEvent);
          handleClose();
          //console.log(`Token no form: ${token}`);
      }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="eventName"
              label="Nom de l'événement"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              value={eventName}
              onChange={(event) => setEventName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider variant="fullWidth" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="eventDescription"
              label="Description de l'événement"
              type="text"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              variant="filled"
              value={eventDescription}
              onChange={(event) => setEventDescription(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={Moment}>
                <DateTimePicker
                name="startDate"
                renderInput={(props) => <TextField {...props} />}
                label="Data/heure de début"
                value={startDate}
                onChange={(newStartDate) => {
                    setStartDate(moment.utc(newStartDate).format());
                    /*let dataUtc = moment.utc(newStartDate).format();
                    console.log(`valor da data UTC: ${dataUtc}`);
                    console.log(`valor da data reconvertido: ${moment.tz(dataUtc,moment.tz.guess())}`);*/
                }}
                />
            </LocalizationProvider>
            </Grid>    
            <Grid item xs={12}>
            <LocalizationProvider dateAdapter={Moment}>
                <DateTimePicker
                    name="endDate"
                    renderInput={(props) => <TextField {...props} />}
                    label="Data/heure de fin"
                    value={endDate}
                    onChange={(newEndDate) => {
                        setEndDate(moment.utc(newEndDate).format());
                }}
                />
            </LocalizationProvider>
            </Grid>    
          <Grid item>
            <Button variant="contained" color="primary" type="submit" >
                Finalizar Cadastro
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

function handleCreateEvent(newEvent) {
  const cookies = parseCookies();
  const headers = {
         'Content-Type': "application/json",
         'Authorization': `Bearer ${cookies['USER_TOKEN']}`,
  };
  axios.post(EventManagerUrl,newEvent,{headers})
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}


export default EventForm;
