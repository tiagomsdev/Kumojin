import {Grid} from "@material-ui/core";
import axios from "axios";
import {
  AuthProviderUrl,
  UserName,
  Password,
} from "./common/constants";
import { useEffect} from "react";
import Home from "./pages/Home";
import nookies from "nookies";

function App() {

  useEffect(()=>{
    getToken()
  },[]);

  return (
    <Grid Container>
       <Home/>
    </Grid>
  );
}

const getToken = () => {
    axios
      .post(AuthProviderUrl, {
        UserName: UserName,
        Password: Password,
      })
      .then(function (response) {
        nookies.set(null, 'USER_TOKEN', response.data, {
          path: '/',
          maxAge: 86400 * 30
      });
        console.log(`Generated Token: ${response.data}`);
      })
      .catch(function (error) {
        console.log(`Error in getToken: ${error}`);
      });
};

export default App;
