import { Grid } from "@material-ui/core";
import axios from "axios";
import { AuthProviderUrl, UserName, Password } from "./common/constants";
import { useEffect } from "react";
import HomeEvents from "./pages/HomeEvents";
import nookies from "nookies";

function App() {
  useEffect(() => {
    getToken();
  }, []);

  return (
    <Grid container>
      <HomeEvents/>
    </Grid>
  );
}

const getToken = () => {
  axios
    .post(AuthProviderUrl, {
      userName: UserName,
      password: Password,
    })
    .then(function (response) {
      console.log("Token: "+response.data)
      nookies.set(null, "USER_TOKEN", response.data, {
        path: "/",
        maxAge: 86400 * 30,
      });
    })
    .catch(function (error) {
      console.log(`Error in getToken: ${error}`);
    });
};

export default App;
