import React from "react";

import { SButton } from "./styles";

const Button = ({ children, disabled = false, filled = false, onClick }) => {
  return (
    <SButton disabled={disabled} filled={filled} onClick={onClick}>
      {/* TODO: Modify children structure for label and icon*/}
      {children}
    </SButton>
  );
};

export default Button;
