import React from "react";
import { Button, Typography } from "@material-ui/core";

import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import Image from "../Image";
import ModalBase from "../ModalBase";

import {
  SCloseLink,
  SWrapperSection,
  SWrapperArticle,
  SWrapperButton,
} from "./styles";

const ModalArticle = ({
  id,
  imageUrl,
  title,
  description,
  onEditClick,
  onDeleteClick,
  onCloseClick,
}) => {
  return (
    <ModalBase>
      <SCloseLink onClick={onCloseClick}>
        <CloseIcon />
      </SCloseLink>
      <SWrapperSection>
        <Image width="354px" height="354px" src={imageUrl} />
        <SWrapperArticle>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
          <SWrapperButton>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              color="primary"
              onClick={() => onEditClick(id)}
            >
              Editar
            </Button>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              color="default"
              onClick={() => onDeleteClick(id)}
            >
              Excluir
            </Button>
          </SWrapperButton>
        </SWrapperArticle>
      </SWrapperSection>
    </ModalBase>
  );
};

export default ModalArticle;
