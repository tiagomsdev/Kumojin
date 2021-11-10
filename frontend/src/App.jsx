import EventDialog from "./components/CreateEvent/EventDialog";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <EventDialog onSubmit={onSubmit}/>
    </Container>
  );
}

function onSubmit(data){
  console.log("Chamou");
}

export default App;
