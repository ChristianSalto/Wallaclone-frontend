import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Input from "../Input/Input";
import "./login.css";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

export function Login(props) {
  const [msj, setMsj] = useState("");
  const { userLogin } = props;

  const handleLogin = async (event) => {
    const { username, password } = event;
    const { ui } = await userLogin(username, password);
    setMsj(ui.msj);
  };

  useEffect(() => {
    const timeId = setInterval(() => {
      setMsj("");
    }, 5000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <div className="container-L">
      <div>
        <h1 className="title">WALLACL0NE</h1>
      </div>
      <Form
        className="form-log"
        onSubmit={handleLogin}
        initialValue={{ username: "", password: "" }}
      >
        <Input name="username" type="text" className="input" />
        <Input name="password" type="password" className="input" />

        <Button variant="contained" className="button" type="submit">
          Login
        </Button>
        <Link to="/register" className="link-log">
          <Button variant="contained" type="button" className="button">
            I'm not registered
          </Button>
        </Link>
        <div className="div-lost-pass">
          <Link
            className="link-lost-pass"
            to={{
              pathname: "/recoverPass",
            }}
          >
            I do not remember my password
          </Link>
        </div>
      </Form>
      <h3 className="msj-log">{msj}</h3>
      <Link to="/">
        <Icon className="home">home</Icon>
      </Link>
    </div>
  );
}

export default Login;
