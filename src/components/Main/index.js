import { connect } from "react-redux";

import Main from "./Main";
import { fetchAds } from "../../store/actions";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadAds: (filter, sort) => dispatch(fetchAds(filter, sort)),
  };
}

const connected = connect(null, mapDispatchToProps);
const ConectMain = connected(Main);

export default ConectMain;
