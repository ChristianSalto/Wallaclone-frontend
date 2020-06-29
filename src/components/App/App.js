import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login/Login';
import Main from '../Main';
//import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/core/styles';

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
        </Switch>
      </Router>
    );
  }
}

export default App;
