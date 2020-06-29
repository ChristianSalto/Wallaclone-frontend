import React from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { Button } from "@material-ui/core";
import "./login.css";

export default function Login(props) {
  const { userLogin } = props;
  const handleLogin = async (event) => {
    const { username, password } = event;

    const data = await userLogin(username, password);
    console.log(data);
  };
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
          <Link to="/">I do not remember my password</Link>
        </div>
        {/* <h3>{msj}</h3> */}
      </Form>
    </div>
  );
}
