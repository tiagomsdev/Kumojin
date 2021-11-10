import React, { useState } from "react";
import { TextField, Button, Divider, Grid, Container } from "@material-ui/core";
//import {shiftTimezoneDateToUserDate} from "../../helpers/TimeZone";
import Moment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

function EventForm({handleClose,onSubmit}) {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  return (
    <Container>
      <form onSubmit={(event) => {
          event.preventDefault();
          onSubmit({});
          handleClose();
      }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="eventName"
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
              id="eventDescription"
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
                id="startDate"
                renderInput={(props) => <TextField {...props} />}
                label="Data/heure de début"
                value={startDate}
                onChange={(newStartDate) => {
                    setStartDate(newStartDate);
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
                    id="endDate"
                    renderInput={(props) => <TextField {...props} />}
                    label="Data/heure de fin"
                    value={endDate}
                    onChange={(newEndDate) => {
                        setEndDate(newEndDate);
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

export default EventForm;
