import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUser } from "../store/selectors";

import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
  return {
    user: getUser(state),
  };
}

const PrivateRoute = ({ component: Component, ...props }) => {
  let username = null;
  if (props.user) {
    username = props.user;
  }

  return (
    <Route
      {...props}
      render={(props) =>
        username ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default connect(mapStateToProps)(PrivateRoute);
