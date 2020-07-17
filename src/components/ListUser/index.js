import { connect } from "react-redux";

import ListUser from "./ListUser";
import { actGetAllUsers } from "../../store/actions";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getUsers: () => dispatch(actGetAllUsers()),
  };
}

const connected = connect(null, mapDispatchToProps);
const ListUserConnected = connected(ListUser);

export default ListUserConnected;
