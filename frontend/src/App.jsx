import EventDialog from "./components/CreateEvent/EventDialog";
import { Container } from "@material-ui/core";
import axios from "axios";
import useRequest from "./hooks/useRequest";
import {AuthProviderUrl, EventManagerUrl, UserName, Password} from "./common/constants";


function App() {
  
  const[token, isLoading, body] = useRequest(
    axios.post,
    AuthProviderUrl,
    {  UserName: UserName,
       Password: Password
    }
  ); 
  
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
