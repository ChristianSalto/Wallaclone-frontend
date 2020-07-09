import { connect } from "react-redux";

import Cards from "./Cards";
import { fetchAdsById } from "../../store/actions";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getAdsById: (id) => dispatch(fetchAdsById(id)),
  };
}

const connected = connect(null, mapDispatchToProps);
const CardsConnected = connected(Cards);

export default CardsConnected;
