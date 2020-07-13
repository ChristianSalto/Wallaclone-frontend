import { connect } from "react-redux";

import FormAds from "./FormAds";

import { actEditAds, actCreatetAds } from "../../store/actions";
import { getUser } from "../../store/selectors";

function mapStateToProps(state, ownProps) {
  return {
    getUser: () => getUser(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    editAds: (formData, token, id) => dispatch(actEditAds(formData, token, id)),
    createAds: (formData, token) => dispatch(actCreatetAds(formData, token)),
  };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const FormAdsConnect = connected(FormAds);

export default FormAdsConnect;
