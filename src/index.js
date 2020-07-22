import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";
import { configureStore } from "./store";
import * as Api from "./services/api";
import { StylesProvider } from "@material-ui/core/styles";
import { ConnectedRouter as Router } from "connected-react-router";

export const history = createBrowserHistory();

let user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  user = [];
}

const store = configureStore({ Api, history })({ user: { user } });

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <Router history={history}>
        <App />
      </Router>
    </StylesProvider>
  </Provider>,
  document.getElementById("root")
);
