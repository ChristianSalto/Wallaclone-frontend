import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../Register";
import Login from "../Login";
import Main from "../Main";
import RecoverPass from "../RecoverPass";
import NewPass from "../newPass";
import Privatezone from "../Privatezone";
import Details from "../Details";
import ListMyAds from "../ListMyAds";
import FormAds from "../FormAds";
import PrivateRoute from "../../privateRouter/PrivateRouter";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/register" render={(props) => <Register {...props} />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route
          path="/recoverpass"
          render={(props) => <RecoverPass {...props} />}
        />
        <Route path="/details" render={(props) => <Details {...props} />} />
        <PrivateRoute
          path="/editads/:id"
          component={(props) => <FormAds {...props} />}
        />
        <PrivateRoute
          path="/newpass"
          component={(props) => <NewPass {...props} />}
        />
        <PrivateRoute
          path="/privatezone"
          component={(props) => <Privatezone {...props} />}
        />
        <PrivateRoute
          path="/listmyads"
          component={(props) => <ListMyAds {...props} />}
        />
      </Switch>
    );
  }
}

export default App;
