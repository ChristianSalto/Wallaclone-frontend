import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards";
import { Button } from "@material-ui/core";
import "./userAds.css";

const UserAds = (props) => {
  const user = props.location.pathname.split("/")[2];
  const [date, setDate] = useState(false);

  const { getAdsUsers, getAds, getUi, clearMsj } = props;
  const { adverts } = getAds;
  const { msj } = getUi;

  useEffect(() => {
    const getAllAdsUsers = async () => {
      await getAdsUsers(user, date);
    };

    getAllAdsUsers();
  }, [getAdsUsers, user, date]);
  return (
    <div className="cntr-user-ads">
      <h1>{user}</h1>
      <Button
        className="btn-user-ads"
        type="button"
        onClick={() => setDate(!date)}
      >
        latest announcements
      </Button>
      <div className="cntr-cards-user">
        {adverts.length === 0 ? (
          <h1 className="h1-msj">{msj}</h1>
        ) : (
          <Cards ads={adverts} />
        )}
      </div>
      <Link to="/listuser" className="cntr-back">
        <Button onClick={() => clearMsj()}>
          <h1>&#9668;</h1>back
        </Button>
      </Link>
    </div>
  );
};

export default UserAds;
