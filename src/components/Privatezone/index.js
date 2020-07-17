import { connect } from "react-redux";

import Privatezone from "./Privatezone";
import {
  fetchDeleteUser,
  fetchPutUser,
  clearSession,
} from "../../store/actions";
import { getUser, getUi } from "../../store/selectors";

function mapStateToProps(state, ownProps) {
  return {
    getUser: getUser(state),
    getUi: getUi(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteUser: (id, token, user) => dispatch(fetchDeleteUser(id, token, user)),
    putUser: (id, token, params) => dispatch(fetchPutUser(id, token, params)),
    clearCookies: () => dispatch(clearSession()),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const PrivatezoneConnected = connected(Privatezone);

export default PrivatezoneConnected;
