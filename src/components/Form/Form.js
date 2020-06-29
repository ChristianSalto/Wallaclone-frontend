import React, { useState } from 'react';

export const formContext = React.createContext();
const { Provider: FormContextProvider } = formContext;

const Form = ({ initialValue, onSubmit, children, ...props }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    onSubmit(value);
  };

  return (
    <FormContextProvider value={{ value, handleChange }}>
      <form onSubmit={handleSubmit} {...props}>
        {children}
      </form>
    </FormContextProvider>
  );
};

export default Form;
