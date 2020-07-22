import { connect } from "react-redux";

import RecoverPass from "./RecoverPass";
import { fetchRecoverPass, clearMsj } from "../../store/actions";
import { getUi } from "../../store/selectors";

function mapStateToProps(state, ownProps) {
  return {
    getStateUi: getUi(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    recoverPass: (email) => dispatch(fetchRecoverPass(email)),
    clearMsj: () => dispatch(clearMsj()),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const UserRecoverPass = connected(RecoverPass);

export default UserRecoverPass;
