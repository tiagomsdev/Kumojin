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


function Home() {
    const[eventList, setEventList] = useState([]);
  return (
    <Grid container spacing={8.4}  justifyContent="left">
      <Grid item md={12}>
          <AppBar>
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
              <EventDialog/>
            </Toolbar>
          </AppBar>    
      </Grid>
      <Grid item justifyContent="left">
          <EventList eventList={eventList} setEventList={setEventList}/>
      </Grid>
    </Grid>
  );
}

export default Home;
