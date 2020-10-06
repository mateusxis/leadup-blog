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

const ModalArticle = () => {
  return (
    <ModalBase>
      <SCloseLink>
        <CloseIcon />
      </SCloseLink>
      <SWrapperSection>
        <Image
          width="354px"
          height="354px"
          src="https://thumbs.jusbr.com/imgs.jusbr.com/publications/artigos/images/capturar1452194585.JPG"
        />
        <SWrapperArticle>
          <Typography>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor
          </Typography>
          <SWrapperButton>
            <Button variant="outlined" startIcon={<EditIcon />} color="primary">
              Editar
            </Button>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              color="default"
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
