import { connect } from "react-redux";

import RecoverPass from "./RecoverPass";
import { fetchRecoverPass } from "../../store/actions";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    recoverPass: (email) => dispatch(fetchRecoverPass(email, ownProps)),
  };
}

const connected = connect(null, mapDispatchToProps);
const UserRecoverPass = connected(RecoverPass);

export default UserRecoverPass;
