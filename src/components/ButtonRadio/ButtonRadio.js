import React from "react";
import Radio from "@material-ui/core/Radio";

import "./buttonRadio.css";

const ButtonRadio = ({ handleFilterTags, selectedValue }) => {
  return (
    <div className="btn-r-container">
      <label>Work</label>
      <Radio
        checked={selectedValue === "work"}
        onChange={handleFilterTags}
        value="work"
        color="default"
        name="radio-button-demo"
      />
      <label>Lifestyle</label>
      <Radio
        checked={selectedValue === "lifestyle"}
        onChange={handleFilterTags}
        value="lifestyle"
        color="default"
        name="radio-button-demo"
      />
      <label>Mobile</label>
      <Radio
        checked={selectedValue === "mobile"}
        onChange={handleFilterTags}
        value="mobile"
        color="default"
        name="radio-button-demo"
      />
      <label>Motor</label>
      <Radio
        checked={selectedValue === "motor"}
        onChange={handleFilterTags}
        value="motor"
        color="default"
        name="radio-button-demo"
      />
      <label>Default</label>
      <Radio
        checked={selectedValue === "default"}
        onChange={handleFilterTags}
        value="default"
        color="default"
        name="radio-button-demo"
      />
    </div>
  );
};

export default ButtonRadio;
