import React from "react";

import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
//import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import "./privatezone.css";

const Privatezone = (...props) => {
  return (
    <div className="cntr-prvt-zone">
      <div className="cntr-perfil">
        {/* <h1>My profile</h1> */}
        <div>
          <Icon className="I-profile">personOutlineOutlinedIcon</Icon>
        </div>
        <div className="cntr-If-Iem">
          <div>
            <Icon className="I-face">face</Icon>
          </div>
          <div>
            <Icon className="I-email">email</Icon>
          </div>
        </div>
        {/* <div className="cntr-btns-pass-dlt"> */}
          <Button variant="contained" color="primary" className="btn-pass">
            <Icon>lock</Icon>
            Change Password
          </Button>
          <Button variant="contained" color="secondary" className="btn-dlt">
            <Icon>delete</Icon>
            Delete
          </Button>
        {/* </div> */}
      </div>
      <div className="cntr-btn-prvt">
        <Button>Boton 1</Button>
        <Button>Boton 2</Button>
        <Button>Boton 3</Button>
      </div>
    </div>
  );
};

export default Privatezone;
