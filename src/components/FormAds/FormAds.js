import React from "react";

import { Input, Button } from "@material-ui/core/";

const FormAds = (props) => {
  const handleEditAds = (event) => {
    event.preventDefault();
    console.log(event.target.autor.value);
    // const { editAds } = props;
    // editAds(id);
  };

  return (
    <form onSubmit={handleEditAds}>
      <Input placeholder="Placeholder" type="text" name="autor" />
      <Input placeholder="Placeholder" />
      <Input placeholder="Placeholder" />
      <Input placeholder="Placeholder" />
      <Input placeholder="Placeholder" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormAds;
