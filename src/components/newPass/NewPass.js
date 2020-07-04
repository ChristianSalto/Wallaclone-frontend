import React, { useState } from "react";
import Form from "../Form";
import Input from "../Input";
import { Button } from "@material-ui/core";

import "./newPass.css";

const NewPass = (props) => {
  const { history } = props;
  const [msj, setMsj] = useState("");
  const handleNewPass = async (event) => {
    const { password } = event;
    const { setNewPass } = props;
    const { ui } = await setNewPass(password);
    setMsj(ui.msj);
    setTimeout(() => {
      setMsj("");
      history.push("/login");
    }, 3000);
  };

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
    </Form>
  );
};

export default NewPass;
