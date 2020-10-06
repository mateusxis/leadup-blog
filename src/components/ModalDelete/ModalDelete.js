import React from "react";
import { Button, Typography } from "@material-ui/core";

import ModalBase from "../ModalBase";

import { SWrapperSection, SWrapperButton } from "./styles";

const ModalDelete = () => {
  return (
    <ModalBase>
      <SWrapperSection>
        <Typography>Tem certeza de que deseja excluir?</Typography>
        <SWrapperButton>
          <Button variant="outlined" color="primary">
            Sim
          </Button>
          <Button variant="outlined" color="default">
            Não
          </Button>
        </SWrapperButton>
      </SWrapperSection>
    </ModalBase>
  );
};

export default ModalDelete;
