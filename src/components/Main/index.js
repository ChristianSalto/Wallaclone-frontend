import { connect } from "react-redux";

import Main from "./Main";
import { getAds, getUi } from "../../store/selectors";


function mapStateToProps(state, ownProps) {
  return {
    getAds: getAds(state),
    getUi: getUi(state),
  }
}


const connected = connect(mapStateToProps, null);
const ConectMain = connected(Main);

export default ConectMain;
