import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import "./listMyAds.css";

const ListMyAds = (props) => {
  const { getMyAds, getMyUser, deleteAds, reserverAds } = props;
  let [myAds, setMyAds] = useState([]);
  let [msjAds, setMsj] = useState("");
  const { user } = getMyUser();
  const { username, token } = user;

  const handleDeleteAds = (id, token) => {
    deleteAds(id, token);
  };

  const handleReserver = (ads, event) => {
    event.currentTarget.value === "reservedo"
      ? (ads.status = "reservado")
      : (ads.status = "vendido");
    reserverAds(ads, token, ads._id);
  };

  useEffect(() => {
    const getAdverts = async () => {
      const { result, msj } = await getMyAds(username, token);
      setMyAds((myAds = result));
      setMsj((msjAds = msj));
    };

    getAdverts();
  }, [getMyAds]);
  return (
    <div className="cntr-myAds-list-user">
      <header className="header-list">
        <h1>All the announcements of {username}</h1>
      </header>
      <div className="cntr-myAds">
        {myAds.map((ads) => (
          <div key={ads._id}>
            <Button
              value="reservado"
              onClick={(event) => handleReserver(ads, event)}
            >
              reservado
            </Button>
            <Button
              className="btn-v"
              value="vendido"
              onClick={(event) => handleReserver(ads, event)}
            >
              vendido
            </Button>
            <h4>{ads.name}</h4>
            <Button
              className="btn-edit"
              onClick={() =>
                props.history.push({
                  pathname: `/editads/${ads._id}`,
                  ads: { ads },
                })
              }
            >
              <Icon className="icon-edit">edit</Icon>
            </Button>
            <Button
              className="btn-delete"
              onClick={() => handleDeleteAds(ads._id, token)}
            >
              <Icon className="icon-delete">delete</Icon>
            </Button>
          </div>
        ))}
      </div>
      <div className="cntr-msj">
        <h1>{msjAds}</h1>
      </div>
      <div className="cntr-back">
        <Button onClick={() => props.history.push("/privatezone")}>
          <h1>&#9668;</h1>back
        </Button>
      </div>
    </div>
  );
};

export default ListMyAds;
