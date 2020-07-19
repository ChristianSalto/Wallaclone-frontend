import React, { Fragment, useState } from "react";
// import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  let [status, setStatus] = useState(false);

  return (
    <Fragment>
      <div className="title-div">
        <Link className="title-link" to="/">
          <h1>Wallaclone</h1>
        </Link>
      </div>
      <div>
        <button
          className="btn-sidebar"
          onClick={() => setStatus((status = !status))}
        >
          &#9776;
        </button>
        <div className={"nav-menu " + (status ? "show" : "")}>
          <div className="container-menu">
            <ul>
              {/* <li>
                <Link className="nav-menu-li">
                  <Icon className="face">face</Icon>
                </Link>
              </li> */}
              <li>
                <Link
                  to="/privatezone"
                  className="nav-menu-li"
                  onClick={() => props.clearMsj()}
                >
                  Private
                </Link>
              </li>
              <li>
                <Link to="/register" className="nav-menu-li">
                  Check in
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-menu-li">
                  Log in
                </Link>
              </li>
              {/* <li>
                <Link to="/" className="nav-menu-li" onClick={clearCookies}>
                  Log out
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
