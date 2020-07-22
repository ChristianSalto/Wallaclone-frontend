import React, { useState, useEffect } from "react";
import Form from "../Form";
import Input from "../Input";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./newPass.css";

const NewPass = (props) => {
  const { setNewPass, getStateUi, clearMsj } = props;
  const [msj, setMsj] = useState("");

  const handleNewPass = async (event) => {
    const { password } = event;
    await setNewPass(password);
  };

  useEffect(() => {
    setTimeout(() => {
      setMsj("");
    }, 5000);
    setMsj(getStateUi.msj);
  }, [getStateUi.msj]);

  return (
    <Form onSubmit={handleNewPass} initialValue={{ password: "" }}>
      <div className="container-newpass">
        <div>
          <p>Please enter your new pass:</p>
          <Input name="password" type="password" className="inp-newpss" />
        </div>

        <Button type="submit" className="btn-newpass">
          Submit
        </Button>
      </div>
      <h3>{msj}</h3>
      <Link to="/login" className="cntr-back">
        <Button onClick={() => clearMsj()}>
          <h1>&#9668;</h1>back
        </Button>
      </Link>
    </Form>
  );
};

export default NewPass;
