import { connect } from "react-redux";

import Cart from "./Cart";
import { actGetCart, actRemoveCart } from "../../store/actions";
import { getAds, getUser, getUi } from "../../store/selectors";

function mapStateToProps(state, ownProps) {
  return {
    getStateAds: getAds(state),
    getStateUser: getUser(state),
    getStateUi: getUi(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getCart: (username, token) => dispatch(actGetCart(username, token)),
    removeCart: (username, token) => dispatch(actRemoveCart(username, token)),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const CartConnected = connected(Cart);

export default CartConnected;
