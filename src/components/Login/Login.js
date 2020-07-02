import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { Button } from "@material-ui/core";
import "./login.css";

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
    }, 3000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <div className="container">
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
            to={{
              pathname: "/recoverPass",
            }}
          >
            I do not remember my password
          </Link>
        </div>
      </Form>
      <h3 className="msj-log">{msj}</h3>
    </div>
  );
}

export default Login;
