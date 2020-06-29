import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { Button } from "@material-ui/core";

import "./register.css";

const Register = (props) => {
  const { history, registerUser, registerNavigate } = props;
  const [msj, setMsj] = useState("");

  const handeleRegister = async (event) => {
    const { username, email, password } = event;

    const user = {
      username: username,
      email: email,
      password: password,
    };

    const { msj, success } = await registerUser(user);
    setMsj(msj);
    setTimeout(() => {
      setMsj("");
      success ? registerNavigate() : history.push("/register");
    }, 3000);
  };

  return (
    <div className="container">
      <Form
        className="form-regis"
        onSubmit={handeleRegister}
        initialValue={{ username: "", email: "", password: "" }}
      >
        <Input name="username" type="text" className="input-re" />
        <Input name="email" type="email" className="input-re" />
        <Input name="password" type="password" className="input-re" />

        <Button variant="contained" className="button-re" type="submit">
          Register
        </Button>
        <Link to="/login" className="link-log">
          <Button variant="contained" type="button" className="button-re">
            I'm already registered
          </Button>
        </Link>
        <h3 className="msj-re">{msj}</h3>
      </Form>
    </div>
  );
};

export default Register;
