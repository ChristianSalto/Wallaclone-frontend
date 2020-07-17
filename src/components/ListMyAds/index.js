import { connect } from "react-redux";

import ListMyAds from "./ListMyAds";
import { getUser } from "../../store/selectors";
import {
  fetchGetMyAds,
  actDeleteAds,
  actReserveAds,
} from "../../store/actions";

function mapStateToProps(state, ownProps) {
  return {
    getMyUser: () => getUser(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getMyAds: (username, token) => dispatch(fetchGetMyAds(username, token)),
    deleteAds: (id, token) => dispatch(actDeleteAds(id, token)),

    reserverAds: (ads, token, id) => dispatch(actReserveAds(ads, token, id)),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const ListMyAdsConnected = connected(ListMyAds);

export default ListMyAdsConnected;
