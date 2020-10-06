import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";

import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import ModalBase from "../ModalBase";
import TextField from "../TextField";

import { SCloseLink, SWrapperSection } from "./styles";

const ModalEdit = ({
  titleModal,
  titleArticle,
  descriptionArticle,
  onSaveClick,
  onCloseClick,
  onImageClick,
}) => {
  const [title, setTitle] = useState(titleArticle);
  const [description, setDescription] = useState(descriptionArticle);

  const handleOnChange = (field, setField) => {
    setField(field);
  };
  return (
    <ModalBase>
      <SCloseLink onClick={onCloseClick}>
        <CloseIcon />
      </SCloseLink>
      <SWrapperSection>
        <Typography>{titleModal}</Typography>
        <TextField
          label="Titulo"
          value={title}
          onChange={(event) => handleOnChange(event.target.value, setTitle)}
        />
        <TextField
          label="Descrição"
          value={description}
          multiline
          rows={4}
          onChange={(event) =>
            handleOnChange(event.target.value, setDescription)
          }
        />
        <Button
          variant="outlined"
          startIcon={<SendIcon />}
          color="secondary"
          onClick={onImageClick}
        >
          IMAGEM
        </Button>
        <Button variant="outlined" color="primary" onClick={onSaveClick}>
          Salvar
        </Button>
      </SWrapperSection>
    </ModalBase>
  );
};

export default ModalEdit;
