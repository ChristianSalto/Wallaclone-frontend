import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import "./listMyAds.css";

const ListMyAds = (props) => {
  const {
    getMyAds,
    getUi,
    getAds,
    getUser,
    deleteAds,
    statusAds,
    clearMsj,
  } = props;

  const { user } = getUser;

  const handleDeleteAds = (id, token) => {
    deleteAds(id, token);
  };

  const handleStatus = (ads, event) => {
    const { value } = event.currentTarget;
    ads.status = value;

    statusAds(ads, user.token, ads._id);
  };

  useEffect(() => {
    const getAdverts = async () => {
      await getMyAds(user.username, user.token);
    };
    getAdverts();
  }, [getMyAds, user.username, user.token]);

  return (
    <div className="cntr-myAds-list-user">
      <header className="header-list">
        <h1>All the announcements of {user.username}</h1>
      </header>
      <div className="cntr-myAds">
        {getAds.adverts.map((ads) => (
          <div key={ads._id}>
            <Button
              className="btn-v"
              value="reservado"
              onClick={(event) => handleStatus(ads, event)}
            >
              res
            </Button>
            <Button
              className="btn-v"
              value="vendido"
              onClick={(event) => handleStatus(ads, event)}
            >
              ven
            </Button>
            <Button
              className="btn-v"
              value="busco"
              onClick={(event) => handleStatus(ads, event)}
            >
              des
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
              onClick={() => handleDeleteAds(ads._id, user.token)}
            >
              <Icon className="icon-delete">delete</Icon>
            </Button>
          </div>
        ))}
      </div>
      <div className="cntr-msj">
        <h1>{getUi.msj}</h1>
      </div>
      <Link to="/privatezone" className="cntr-back">
        <Button onClick={() => clearMsj()}>
          <h1>&#9668;</h1>back
        </Button>
      </Link>
    </div>
  );
};

export default ListMyAds;
