import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import "./listMyAds.css";

const ListMyAds = (props) => {
  const { getMyAds, getMyUser, deleteAds } = props;
  let [myAds, setMyAds] = useState([]);
  let [msjAds, setMsj] = useState("");
  const { user } = getMyUser();
  const { username, token } = user;

  const handleDeleteAds = (id, token) => {
    deleteAds(id, token);
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
    <div>
      <ul>
        <div className="cntr-myAds">
          {myAds.map((ads) => (
            <div key={ads._id}>
              <li>{ads.name}</li>
              <Button
                variant="contained"
                className="btn-edit"
                onClick={() =>
                  props.history.push({
                    pathname: `/editads/${ads._id}`,
                    ads: { ads },
                  })
                }
              >
                Edit
              </Button>
              <Button
                variant="contained"
                className="btn-delete"
                onClick={() => handleDeleteAds(ads._id, token)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </ul>
      <div>
        <h1>{msjAds}</h1>
      </div>
    </div>
  );
};

export default ListMyAds;
