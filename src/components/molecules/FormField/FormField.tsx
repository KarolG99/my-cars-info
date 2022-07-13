import React from "react";
import { IFormField } from "../../../types";
import { StyledInput, StyledLabel } from "./FormField.styles";

const FormField = ({
  type = "string",
  id,
  label,
  name,
  placeholder,
  value,
  onChange,
}: IFormField) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default FormField;
