import { connect } from "react-redux";

import Details from "./Details";
import { getAds } from "../../store/selectors";


function mapStateToProps(state, ownProps) {
  return {
    getState: getAds(state),
  };
}

const connected = connect(mapStateToProps, null);
const DetailsConnected = connected(Details);

export default DetailsConnected;
