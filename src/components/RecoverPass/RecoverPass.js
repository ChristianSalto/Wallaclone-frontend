import React from "react";
import Form from "../Form";
import Input from "../Input";
import { Button } from "@material-ui/core";
import "./recoverPass.css";

const RecoverPass = (props) => {
  const handleRecoverPass = async (event) => {
    const { email } = event;
    const { recoverPass } = props;
    await recoverPass(email);
  };

  return (
    <Form onSubmit={handleRecoverPass} initialValue={{ email: "" }}>
      <div className="container-recoverpass">
        <div>
          <p>
            Please enter your email and you will receive an email to reset your
            password:
          </p>
          <Input name="email" type="email" className="inp-recoverpass" />
        </div>

        <Button type="submit" className="btn-recoverpass">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default RecoverPass;
