import { connect } from "react-redux";

import FormAds from "./FormAds";

import { actEditAds } from "../../store/actions";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    editAds: (id) => dispatch(actEditAds(id)),
  };
}

const connected = connect(null, mapDispatchToProps);
const FormAdsConnect = connected(FormAds);

export default FormAdsConnect;
