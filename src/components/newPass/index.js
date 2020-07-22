import { connect } from "react-redux";

import NewPass from "./NewPass";
import { fetchNewPass, clearMsj } from "../../store/actions";
import { getUi } from "../../store/selectors";

function mapStateToProps(state, ownProps) {
  return {
    getStateUi: getUi(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setNewPass: (password) => dispatch(fetchNewPass(password)),
    clearMsj: () => dispatch(clearMsj()),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const UserNewPass = connected(NewPass);

export default UserNewPass;
