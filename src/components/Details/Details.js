import React, { Fragment } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import Cards from "../Cards";
import Load from "../Load";

import { Button } from "@material-ui/core";

import "./details.css";

const Details = (props) => {
  const { adverts } = props.getState;
  // const { url } = props.match;
  // console.log(props);
  return (
    <div>
      {!adverts ? (
        (setTimeout(() => {
          props.history.push("/");
        }, 3000),
        (<Load />))
      ) : (
        <Fragment>
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
