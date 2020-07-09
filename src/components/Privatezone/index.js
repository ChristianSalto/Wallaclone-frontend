import { connect } from "react-redux";

import Privatezone from "./Privatezone";
import { fetchDeleteUser, fetchPutUser } from "../../store/actions";
import { getUser } from "../../store/selectors";

function mapStateToProps(state, ownProps) {
  return {
    getUser: getUser(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteUser: (id, token) => dispatch(fetchDeleteUser(id, token)),
    putUser: (id, token, params) => dispatch(fetchPutUser(id, token, params)),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const PrivatezoneConnected = connected(Privatezone);

export default PrivatezoneConnected;
