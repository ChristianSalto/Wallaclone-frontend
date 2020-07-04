import React, { useContext } from "react";
import { formContext } from "../Form/Form";

const Input = ({ component: Component = "input", ...props }) => {
  const { value, handleChange } = useContext(formContext);
  return (
    <Component
      placeholder={props.placeholder ? props.placeholder : props.name}
      required
      {...props}
      onChange={handleChange}
      value={value[props.name]}
    />
  );
};

export default Input;
