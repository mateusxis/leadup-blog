import React from "react";

import { SContainer, SShadow } from "./styles";

const ModalBase = ({ children }) => {
  return (
    <SShadow>
      <SContainer square>{children}</SContainer>
    </SShadow>
  );
};

export default ModalBase;
