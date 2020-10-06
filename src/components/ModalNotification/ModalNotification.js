import React from "react";
import { Typography } from "@material-ui/core";

import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import ModalBase from "../ModalBase";

import { SCloseLink, SWrapperSection } from "./styles";

const ModalNotification = () => {
  return (
    <ModalBase>
      <SCloseLink>
        <CloseIcon />
      </SCloseLink>
      <SWrapperSection>
        <Typography>ARTIGO EXCLUIDO COM SUCESSO</Typography>
      </SWrapperSection>
    </ModalBase>
  );
};

export default ModalNotification;
