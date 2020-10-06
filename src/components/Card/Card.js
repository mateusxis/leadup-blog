import React from "react";

import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import Image from "../Image";

import { SButton, SCard, SContainer, SLink, STypography } from "./styles";

const Card = ({
  title,
  imageUrl,
  description,
  id,
  onEditClick,
  onDeleteClick,
  onOpenClick,
}) => {
  return (
    <SCard className="card" square>
      <SLink onClick={() => onOpenClick(id)}>
        <SContainer direction="column">
          <Image height="244px" width="244px" src={imageUrl} />
          <STypography align="center" color="secondary" variant="h6">
            {title}
          </STypography>
          <STypography align="center" color="secondary" variant="subtitle1">
            {description}
          </STypography>
        </SContainer>
      </SLink>
      <SContainer direction="row">
        <SButton
          variant="outlined"
          startIcon={<EditIcon />}
          color="primary"
          onClick={() => onEditClick(id)}
        >
          Editar
        </SButton>
        <SButton
          variant="outlined"
          startIcon={<DeleteIcon />}
          color="default"
          onClick={() => onDeleteClick(id)}
        >
          Excluir
        </SButton>
      </SContainer>
    </SCard>
  );
};

export default Card;
