import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "../Register";
import Login from "../Login";
import Main from "../Main";
import Privatezone from "../Privatezone";
import PrivateRoute from "../../privateRouter/PrivateRouter";
import { StylesProvider } from "@material-ui/core/styles";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            path="/register"
            render={(props) => (
              <StylesProvider injectFirst>
                <Register {...props} />
              </StylesProvider>
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <StylesProvider injectFirst>
                <Login {...props} />
              </StylesProvider>
            )}
          />
          <PrivateRoute
            path="/privatezone"
            component={(props) => (
              <StylesProvider injectFirst>
                <Privatezone {...props} />
              </StylesProvider>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
