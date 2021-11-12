import React, { useState } from "react";
import { TextField, Button, Divider, Grid, Container } from "@material-ui/core";
import Moment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import moment from "moment";
import axios from "axios";
import {EventManagerUrl} from "../../common/constants";
import{parseCookies} from "nookies";

function EventForm({handleClose, handleCreateEvent }) {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [errors,setErrors] = useState({ eventName: { valid: true, text: "" }});
  
  return (
    <Container>
      <form data-testid="newEvent-form" onSubmit={(event) => {
          event.preventDefault();
          const newEvent = {
             name: eventName,
             description: eventDescription,
             startDate: startDate,
             endDate: endDate
          }
          handleOnSubmit(newEvent);
          handleCreateEvent([newEvent]);
          handleClose();
      }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              data-testid="eventName-input"
              required
              autoFocus
              name="eventName"
              label="Nom de l'événement"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              inputProps={{
                maxLength: 32,
              }}
              error={!errors.eventName.valid}
              helperText={errors.eventName.text}
              value={eventName}
              onChange={(event) => setEventName(event.target.value)}
              onBlur={() => setErrors({ eventName: validateEventName(eventName)})}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider variant="fullWidth" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              data-testid="eventDescription-input"
              required
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
                data-testid="startDate-input"
                required
                disablePast
                name="startDate"
                renderInput={(props) => <TextField {...props} />}
                label="Data/heure de début"
                value={startDate}
                onChange={(newStartDate) => {setStartDate(handleDateChange(newStartDate))                
                }}
                />
            </LocalizationProvider>
            </Grid>    
            <Grid item xs={12}>
            <LocalizationProvider dateAdapter={Moment}>
                <DateTimePicker
                    data-testid="endDate-input"
                    required
                    disablePast
                    name="endDate"
                    renderInput={(props) => <TextField {...props} />}
                    label="Data/heure de fin"
                    value={endDate}
                    error={true}
                    onChange={(newEndDate) => {setEndDate(handleDateChange(newEndDate))}}
                />
            </LocalizationProvider>
            </Grid>    
          <Grid item>
            <Button variant="contained" color="primary" type="submit" >
                Enregistrer
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

function handleOnSubmit(newEvent) {
  const cookies = parseCookies();
  const headers = {
         'Content-Type': "application/json",
         'Authorization': `Bearer ${cookies['USER_TOKEN']}`,
  };
  axios.post(EventManagerUrl,newEvent,{headers})
    .then(function (response) {
     // handleEventList(response.data)     
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function handleDateChange(newDate){
  return moment.utc(newDate).format();
}

function validateEventName(name) {
  console.log(name.length);
  return name.length > 32
    ? { valid: false, text:"Le nom de l'événemet doit avoir 32 caractères maximum" }
    : { valid: true, text: "" };
}

export default EventForm;
