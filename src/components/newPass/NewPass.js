import React from "react";
import Form from "../Form";
import Input from "../Input";
import { Button } from "@material-ui/core";

import {} from "../../services/api";
import "./newPass.css";

const NewPass = (props) => {
  const handleNewPass = async (event) => {
    const { password } = event;
  };

  return (
    <Form onSubmit={handleNewPass} initialValue={{ password: "" }}>
      <div className="container-newpass">
        <div>
          <p>Please enter your new pass:</p>
          <Input name="password" type="password" className="inp-newpss"/>
        </div>

        <Button type="submit" className="btn-newpass">Submit</Button>
      </div>
    </Form>
  );
};

export default NewPass;
