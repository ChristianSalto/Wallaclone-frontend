import React, { useEffect, useState } from "react";
import Form from "../Form";
import Input from "../Input";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./recoverPass.css";

const RecoverPass = (props) => {
  const [msj, setMsj] = useState("");
  const { getStateUi, clearMsj } = props;

  const handleRecoverPass = async (event) => {
    const { email } = event;
    const { recoverPass } = props;
    await recoverPass(email);
  };

  useEffect(() => {
    setTimeout(() => {
      setMsj("");
    }, 5000);
    setMsj(getStateUi.msj);
  }, [getStateUi.msj]);

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
      <h3 className="h3-rec-pass">{msj}</h3>
      <Link to="/login" className="cntr-back">
        <Button onClick={() => clearMsj()}>
          <h1>&#9668;</h1>back
        </Button>
      </Link>
    </Form>
  );
};

export default RecoverPass;
