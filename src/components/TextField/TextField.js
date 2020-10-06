import React from "react";

import { STextField } from "./styles";

const TextField = ({ defaultValue, label, margin, onChange, value, type }) => {
  return (
    <STextField
      defaultValue={defaultValue}
      label={label}
      margin={margin}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
};

export default TextField;
