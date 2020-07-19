import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import "./privatezone.css";

const Privatezone = (props) => {
  const { getUi, getUser, deleteUser, putUser } = props;
  const { user } = getUser;
  let [msj, setMsj] = useState("");

  const handleDeleteUser = (id, token) => {
    deleteUser(id, token, user.username);
    localStorage.removeItem("user");
  };

  const handeleUpdate = async (params) => {
    await putUser(user.id, user.token, params);
  };

  const clearCookies = () => {
    localStorage.removeItem("user");
    props.clearCookies();
  };

  useEffect(() => {
    setMsj(getUi.msj);
    setTimeout(() => {
      setMsj("");
    }, 5000);
  }, [getUi.msj]);

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
          initialValue={{
            username: user.username,
            email: user.email,
            password: "",
          }}
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
          onClick={() => handleDeleteUser(user.id, user.token)}
        >
          <Icon>delete</Icon>
          <span className="s-delete">Delete</span>
        </Button>
      </div>
      <div className="cntr-btn-prvt">
        <div className="cntr-title">
          <h1 className="title-prvt">WALLACL0NE</h1>
        </div>
        <Link to="/listmyads" className="link-btns">
          <Button className="btn-my-ads">All my adverts</Button>
        </Link>
        <Link
          to={{
            pathname: "/createads",
            ads: { ads: {} },
          }}
          className="link-btns"
        >
          <Button className="btn-my-ads">Create my adverts</Button>
        </Link>
        <Link to="/">
          <Icon className="home">home</Icon>
        </Link>
      </div>
    </div>
  );
};

export default Privatezone;
