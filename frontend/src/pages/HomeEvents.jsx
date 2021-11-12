import {useState} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import EventDialog from "../components/CreateEvent/EventDialog";
import EventList from "../components/EventList/EventList";
import {getUserTimezone, getUserDateFromUtc} from "../helpers/momentTimeZone";


function HomeEvents() {
   const[eventList, setEventList] = useState([]);

   const handleEventList = (data) =>{
       const newEventList  = [...data];
       setEventList(...eventList,handleEventTimeZone(newEventList));
   }

   function handleEventTimeZone(data){
      data.map((item) => (
        item.startDate = getUserDateFromUtc(item.startDate, getUserTimezone()),
        item.endDate = getUserDateFromUtc(item.endDate, getUserTimezone())
      ));
      return data;
   }

   const handleCreateEvent = (data) => {
      setEventList(oldEventList => [...oldEventList,...handleEventTimeZone(data)]);
   }

  return (
    <Grid container spacing={8.4}  justifyContent="left">
      <Grid item md={12}>
          <AppBar data-testid="homeEvents-appBar">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" 
            noWrap
            component="div"
            sx={{ padding:2 }}>
                Liste d'événements
              </Typography>
              <EventDialog handleCreateEvent={handleCreateEvent}/>
            </Toolbar>
          </AppBar>    
      </Grid>
      <Grid item justifyContent="left">
          <EventList handleEventList={handleEventList} eventList={eventList}/>
      </Grid>
    </Grid>
  );
}


export default HomeEvents;
