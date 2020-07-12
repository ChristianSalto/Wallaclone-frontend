import { connect } from "react-redux";

import ListMyAds from "./ListMyAds";
import { getUser } from "../../store/selectors";
import { fetchGetMyAds } from "../../store/actions";

function mapStateToProps(state, ownProps) {
  return {
    getMyUser: () => getUser(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getMyAds: (username, token) => dispatch(fetchGetMyAds(username, token)),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const ListMyAdsConnected = connected(ListMyAds);

export default ListMyAdsConnected;
