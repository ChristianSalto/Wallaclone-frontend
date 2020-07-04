import React from "react";
import Radio from "@material-ui/core/Radio";
// import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
// import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const ButtonRadio = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <Radio
        checked={selectedValue === "a"}
        onChange={handleChange}
        value="a"
        label="work"
        color="default"
        name="radio-button-demo"
        inputProps={{ "aria-label": "A" }}
      />
      <Radio
        checked={selectedValue === "b"}
        onChange={handleChange}
        value="b"
        color="default"
        name="radio-button-demo"
        inputProps={{ "aria-label": "B" }}
      />
      <Radio
        checked={selectedValue === "d"}
        onChange={handleChange}
        value="d"
        color="default"
        name="radio-button-demo"
        inputProps={{ "aria-label": "D" }}
      />
      <Radio
        checked={selectedValue === "e"}
        onChange={handleChange}
        value="e"
        color="default"
        name="radio-button-demo"
        inputProps={{ "aria-label": "E" }}
        // icon={<RadioButtonUncheckedIcon fontSize="small" />}
        // checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
      />
    </div>
  );
};

export default ButtonRadio;
