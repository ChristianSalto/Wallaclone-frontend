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

  const handleEditAds = (event) => {
    event.preventDefault();
    const { editAds } = props;
    const { date, description, price, status, checkboxing } = event.target;
    const tags = [];
    checkboxing.forEach((element) => {
      if (element.checked) {
        tags.push(element.value);
      }
    });
    const params = {
      date: date.value,
      description: description.value,
      price: price.value,
      status: status.value,
      tags: tags,
    };
    editAds(id, user.token, params);
  };

  return (
    <>
      {!ads ? (
        <Redirect to="/listmyads" />
      ) : (
        <form onSubmit={handleEditAds} className="form-edit-ads">
          <header className="header-form-edit">
            <h1>{ads.autor}</h1>
          </header>
          <Input
            placeholder="autor"
            type="text"
            name="autor"
            value={ads.autor}
          />
          <Input placeholder="date" type="date" name="date" />
          <Input
            placeholder="description"
            type="textarea"
            name="description"
            defaultValue={ads.description}
          />
          <Input
            placeholder="price"
            type="number"
            name="price"
            defaultValue={ads.price}
          />
          <Input
            placeholder="status"
            type="text"
            name="status"
            defaultValue={ads.status}
          />
          <Input type="file" name="img" />
          <FormGroup aria-label="position" row className="form-grup">
            <FormControlLabel
              name="checkboxing"
              value="work"
              control={<Checkbox color="primary" />}
              label="work"
              labelPlacement="start"
            />
            <FormControlLabel
              name="checkboxing"
              value="mobile"
              control={<Checkbox color="primary" />}
              label="mobile"
              labelPlacement="start"
            />
            <FormControlLabel
              name="checkboxing"
              value="lifestyle"
              control={<Checkbox color="primary" />}
              label="lifestyle"
              labelPlacement="start"
            />
            <FormControlLabel
              name="checkboxing"
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
    </>
  );
};

export default FormAds;
