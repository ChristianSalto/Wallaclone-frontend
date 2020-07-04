import { connect } from "react-redux";

import NewPass from "./NewPass";
import { fetchNewPass } from "../../store/actions";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setNewPass: (password) => dispatch(fetchNewPass(password)),
  };
}

const connected = connect(null, mapDispatchToProps);
const UserNewPass = connected(NewPass);

export default UserNewPass;
