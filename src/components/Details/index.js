import { connect } from "react-redux";

import Details from "./Details";
import { getAds, getUser } from "../../store/selectors";
import { actAddCart } from "../../store/actions";

function mapStateToProps(state, ownProps) {
  return {
    getStateAds: getAds(state),
    getStateUser: getUser(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addCart: (adverts, username) => dispatch(actAddCart(adverts, username)),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const DetailsConnected = connected(Details);

export default DetailsConnected;
