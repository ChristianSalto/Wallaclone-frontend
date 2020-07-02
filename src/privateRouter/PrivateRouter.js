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
  let token = null;
  if (props.user) {
    token = props.user.token;
  }

  return (
    <Route
      {...props}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default connect(mapStateToProps)(PrivateRoute);
