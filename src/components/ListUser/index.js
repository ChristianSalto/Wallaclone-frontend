import { connect } from "react-redux";

import ListUser from "./ListUser";
import { actGetAllUsers } from "../../store/actions";
// import { getUser } from "../../store/selectors";

// function mapStateToProps(state, ownProps) {
//   return {
//     getStateUser: getUser(state),
//   };
// }

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getUsers: () => dispatch(actGetAllUsers()),
  };
}

const connected = connect(null, mapDispatchToProps);
const ListUserConnected = connected(ListUser);

export default ListUserConnected;
