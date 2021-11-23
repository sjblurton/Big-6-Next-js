import { ErrorMessage, Field } from "formik";
import React from "react";
import { ErrorText } from "..";
import { Label, Wrapper } from "./styles";

const Select = ({ name, label, options, ...restProps }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Field as="select" id={name} name={name} {...restProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage component={ErrorText} name={name} />
    </Wrapper>
  );
};

export default Select;
