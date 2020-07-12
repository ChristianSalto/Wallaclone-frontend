import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import "./privatezone.css";

const Privatezone = (props) => {
  const { getUser, deleteUser, putUser } = props;
  let [user, setUser] = useState({});
  let [idUser, setIdUser] = useState("");
  let [tokenUser, setTokenUser] = useState("");
  let [msj, setMsj] = useState("");

  const handleDeleteUser = (id, token) => {
    deleteUser(id, token);
    localStorage.removeItem("user");
  };

  const handeleUpdate = async (params) => {
    const { ui } = await putUser(idUser, tokenUser, params);
    setMsj(ui.msj);
    setTimeout(() => {
      setMsj("");
    }, 5000);
  };

 

  const clearCookies = () => {
    localStorage.removeItem("user");
    props.clearCookies();
  };

  useEffect(() => {
    const member = () => {
      return getUser;
    };
    user = member();
    setIdUser((idUser = user.user.id));
    setTokenUser((tokenUser = user.user.token));
    setUser((user = { username: user.user.username, email: user.user.email }));
  }, [props]);

  return (
    <div className="cntr-prvt-zone">
      <div className="cntr-perfil">
        <div>
          <Icon className="I-profile">personOutlineOutlinedIcon</Icon>
        </div>
        <div className="cntr-If-Iem">
          <div>
            <Icon className="I-face">face</Icon>
            {user.username}
          </div>
          <div>
            <Icon className="I-email">email</Icon>
            {user.email}
          </div>
        </div>

        <Form
          className="form-upd"
          onSubmit={handeleUpdate}
          initialValue={{ username: "", email: "", password: "" }}
        >
          <Input name="username" type="text" className="inp-upd" />
          <Input name="email" type="email" className="inp-upd" />
          <Input name="password" type="password" className="inp-upd" />
          <Button variant="contained" className="btn-upd" type="submit">
            <Icon>update</Icon>
            <span className="s-upd">Update</span>
          </Button>
        </Form>
        <h3 className="">{msj}</h3>
        {/* <Button variant="contained" color="primary" className="btn-pass">
          <Icon>lock</Icon>
          Change Password
        </Button> */}
        <Button
          variant="contained"
          color="primary"
          className="btn-log-out"
          onClick={clearCookies}
        >
          <span className="material-icons">exit_to_app</span>
          <span className="s-logout">Log out</span>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="btn-dlt"
          onClick={() => handleDeleteUser(idUser, tokenUser)}
        >
          <Icon>delete</Icon>
          <span className="s-delete">Delete</span>
        </Button>
      </div>
      <div className="cntr-btn-prvt">
        <Link to="/listmyads">
          <Button>All my Adverts</Button>
        </Link>
        <Button>Boton 2</Button>
        <Button>Boton 3</Button>
      </div>
    </div>
  );
};

export default Privatezone;
