import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import { Button } from "@material-ui/core";
import "./userAds.css";

const UserAds = (props) => {
  const user = props.location.pathname.split("/")[2];
  const [date, setDate] = useState(false);

  const { getAdsUsers } = props;
  const [adsUsers, setAdsUsers] = useState([]);

  useEffect(() => {
    const getAllAdsUsers = async () => {
      const allAdsUsers = await getAdsUsers(user, date);
      setAdsUsers(allAdsUsers);
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
        <Cards ads={adsUsers} />
      </div>
      <div className="cntr-back">
        <Button onClick={() => props.history.push("/listuser")}>
          <h1>&#9668;</h1>back
        </Button>
      </div>
    </div>
  );
};

export default UserAds;
