import React from "react";
import { Typography } from "@material-ui/core";

import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import ModalBase from "../ModalBase";

import { SCloseLink, SWrapperSection } from "./styles";

const ModalNotification = ({message, onCloseClick}) => {
  return (
    <ModalBase>
      <SCloseLink onClick={onCloseClick}>
        <CloseIcon />
      </SCloseLink>
      <SWrapperSection>
        <Typography>{message}</Typography>
      </SWrapperSection>
    </ModalBase>
  );
};

export default ModalNotification;
