import { connect } from "react-redux";

import UserAds from "./UserAds";
import { actGetAdsUser } from "../../store/actions";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getAdsUsers: (user, date) => dispatch(actGetAdsUser(user, date)),
  };
}

const connected = connect(null, mapDispatchToProps);
const UserAdsConnected = connected(UserAds);

export default UserAdsConnected;
