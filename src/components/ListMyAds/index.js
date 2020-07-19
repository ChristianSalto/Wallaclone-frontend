import { connect } from "react-redux";

import ListMyAds from "./ListMyAds";
import { getUser, getAds, getUi } from "../../store/selectors";
import {
  fetchGetMyAds,
  actDeleteAds,
  actStatusAds,
  clearMsj,
} from "../../store/actions";

function mapStateToProps(state, ownProps) {
  return {
    getUser: getUser(state),
    getAds: getAds(state),
    getUi: getUi(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getMyAds: (username, token) => dispatch(fetchGetMyAds(username, token)),
    deleteAds: (id, token) => dispatch(actDeleteAds(id, token)),
    clearMsj: () => dispatch(clearMsj()),
    statusAds: (ads, token, id) => dispatch(actStatusAds(ads, token, id)),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const ListMyAdsConnected = connected(ListMyAds);

export default ListMyAdsConnected;
