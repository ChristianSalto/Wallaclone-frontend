import React, { Fragment, useState, useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import Cards from "../Cards";
import Load from "../Load";

import { Button } from "@material-ui/core";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import "./details.css";

const Details = (props) => {
  const { adverts } = props.getStateAds;
  const { user } = props.getStateUser;
  const { addCart } = props;
  const [msj, setMsj] = useState("");


  const handleCart = (adverts, user) => {
    !user
      ? setMsj("you need to be logged in")
      : addCart(adverts, user.username);
  };

  useEffect(() => {
    setTimeout(() => {
      setMsj("");
    }, 5000);
  }, [msj]);

  return (
    <div>
      {adverts.length === 0 ? (
        (setTimeout(() => {
          props.history.push("/");
        }, 3000),
        (<Load />))
      ) : (
        <Fragment>
          <Button
            className="btn-i-cart"
            onClick={() => handleCart(adverts, user)}
          >
            <span className="icon-cart"></span>
          </Button>
          <h3>{msj}</h3>
          <div className="container-details">
            <Cards ads={adverts} />
          </div>
          <div className="container-rs">
            <span className="share">SHARE</span>
            <FacebookShareButton url="67.202.23.149" className="cntr-fbk-twr">
              <FacebookIcon size={32} round={true} className="facebook" />
            </FacebookShareButton>
            <TwitterShareButton url="67.202.23.149" className="cntr-fbk-twr">
              <TwitterIcon size={32} round={true} className="twitter" />
            </TwitterShareButton>
          </div>
        </Fragment>
      )}

      <Button
        onClick={() => props.history.push("/")}
        className="btn-back-dtails"
      >
        <h1 className="h1-btn-back">&#9668;</h1>home
      </Button>
    </div>
  );
};

export default Details;
