import { connect } from "react-redux";

import Register from "./Register";

import { registerUser } from "../../store/actions";
// import { getUi } from "../../store/selectors";

// const mapStateToProps = (state, ownProps) => {
//   return {
//     getUi: () => state.iu,
//   };
// };
function mapDispatchToProps(dispatch, ownProps) {
  return {
    registerUser: (user) => dispatch(registerUser(user)),
    registerNavigate: () => ownProps.history.push("/login"),
  };
}

const connected = connect(null, mapDispatchToProps);
const RegisterConnected = connected(Register);

export default RegisterConnected;
