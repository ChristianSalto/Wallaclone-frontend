import { connect } from "react-redux";

import NewPass from "./NewPass";

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

const connected = connect(null, mapDispatchToProps);
const UserNewPass = connected(NewPass);

export default UserNewPass;
