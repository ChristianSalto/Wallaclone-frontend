import { connect } from "react-redux";

import Navbar from "./Navbar";
import { clearMsj } from "../../store/actions";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    clearMsj: () => dispatch(clearMsj()),
  };
}

const connected = connect(null, mapDispatchToProps);
const NavbarConnected = connected(Navbar);

export default NavbarConnected;
