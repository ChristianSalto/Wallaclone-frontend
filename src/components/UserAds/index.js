import { connect } from "react-redux";

import UserAds from "./UserAds";
import { actGetAdsUser, clearMsj } from "../../store/actions";
import { getAds, getUi } from "../../store/selectors";

function mapStateToProps(state, ownProps) {
  return {
    getAds: getAds(state),
    getUi: getUi(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getAdsUsers: (user, date) => dispatch(actGetAdsUser(user, date)),
    clearMsj: () => dispatch(clearMsj()),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const UserAdsConnected = connected(UserAds);

export default UserAdsConnected;
