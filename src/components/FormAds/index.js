import { connect } from "react-redux";

import FormAds from "./FormAds";

import { actEditAds } from "../../store/actions";
import { getUser } from "../../store/selectors";

function mapStateToProps(state, ownProps) {
  return {
    getUser: () => getUser(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    editAds: (id, token, params) => dispatch(actEditAds(id, token, params)),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const FormAdsConnect = connected(FormAds);

export default FormAdsConnect;
