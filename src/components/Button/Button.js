import React from "react";

import { SButton } from "./styles";

const Button = ({ children, disabled = false, filled = false, onClick }) => {
  return (
    <SButton disabled={disabled} filled={filled} onClick={onClick}>
      {children}
    </SButton>
  );
};

export default Button;
