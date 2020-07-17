import { connect } from "react-redux";

import Main from "./Main";
import { fetchAds } from "../../store/actions";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadAds: (filter, date) => dispatch(fetchAds(filter, date)),
  };
}

const connected = connect(null, mapDispatchToProps);
const ConectMain = connected(Main);

export default ConectMain;
