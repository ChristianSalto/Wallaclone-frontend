import { connect } from "react-redux";

import FormMain from "./FormMain";
import { fetchAds } from "../../store/actions";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        loadAds: (filter, date) => dispatch(fetchAds(filter, date))
    }
}

const connected = connect(null, mapDispatchToProps);
const connectFormMain = connected(FormMain);

export default connectFormMain;