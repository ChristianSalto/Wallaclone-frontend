import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import "./listMyAds.css";


const ListMyAds = (props) => {
  const { getMyAds, getMyUser } = props;
  let [myAds, setMyAds] = useState([]);
  let [msjAds, setMsj] = useState("");


  useEffect(() => {
    const { user } = getMyUser();
    const { username, token } = user;
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
          {myAds.map((item) => (
            <div key={item._id}>
              <li>{item.name}</li>
              <Button
                variant="contained"
                className="btn-edit"
                onClick={() => props.history.push("/editads")}
              >
                Edit
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
