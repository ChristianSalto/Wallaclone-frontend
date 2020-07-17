import React from "react";
import { Redirect } from "react-router-dom";

import {
  Input,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core/";

import "./formads.css";

const FormAds = (props) => {
  const ads =
    typeof props.location.ads !== "undefined" ? props.location.ads.ads : null;
  const { user } = props.getUser();
  const { id } = props.match.params;
  const { editAds, createAds } = props;

  const handleEditAds = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    typeof id !== "undefined"
      ? editAds(formData, user.token, id)
      : createAds(formData, user.token);
  };

  return (
    <>
      {!ads ? (
        <Redirect to="/listmyads" />
      ) : (
        <form onSubmit={handleEditAds} className="form-edit-ads">
          <header className="header-form-edit">
            <h1>{user.username}</h1>
          </header>
          <Input
            placeholder="autor"
            type="text"
            name="autor"
            value={user.username}
          />
          <Input
            placeholder="name"
            type="text"
            name="name"
            defaultValue={ads.name}
            required
          />
          <Input placeholder="date" type="date" name="date" required />
          <Input
            placeholder="description"
            type="textarea"
            name="description"
            defaultValue={ads.description}
            required
          />
          <Input
            placeholder="price"
            type="number"
            name="price"
            defaultValue={ads.price}
            required
          />
          <Input
            placeholder="status"
            type="text"
            name="status"
            defaultValue={ads.status}
            required
          />
          <Input type="file" name="img" />
          <FormGroup aria-label="position" row className="form-grup">
            <FormControlLabel
              name="tags"
              value="work"
              control={<Checkbox color="primary" />}
              label="work"
              labelPlacement="start"
            />
            <FormControlLabel
              name="tags"
              value="mobile"
              control={<Checkbox color="primary" />}
              label="mobile"
              labelPlacement="start"
            />
            <FormControlLabel
              name="tags"
              value="lifestyle"
              control={<Checkbox color="primary" />}
              label="lifestyle"
              labelPlacement="start"
            />
            <FormControlLabel
              name="tags"
              value="motor"
              control={<Checkbox color="primary" />}
              label="motor"
              labelPlacement="start"
            />
          </FormGroup>
          <Button type="submit" className="btn-edit-form">
            Submit
          </Button>
        </form>
      )}
      <div className="cntr-back-form">
        <Button onClick={() => props.history.push("/privatezone")}>
          <h1>&#9668;</h1>back
        </Button>
      </div>
    </>
  );
};

export default FormAds;
