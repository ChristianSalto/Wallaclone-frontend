import { connect } from 'react-redux';

import Login from './Login';

//import { getStateUser } from '../../store/selectors';
import { loadLogin } from '../../store/actions';

// function mapStateToProps(state, ownProps) {
//   return {
//     user: getStateUser(state),
//   };
// }

function mapDispatchToProps(dispatch, ownProps) {
  return {
    userLogin: (username, password) =>
      dispatch(loadLogin(username, password, ownProps)),
  };
}

const connected = connect(null, mapDispatchToProps);
const UserLogined = connected(Login);

export default UserLogined;