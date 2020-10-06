import React from "react";
import { Button, Typography } from "@material-ui/core";

import { ReactComponent as PlusIcon } from "../../assets/icons/plus-circle.svg";

import { STitleWrapper } from "./styles";

function TitleHome({ onCreateClick }) {
  return (
    <STitleWrapper>
      <Typography>ARTIGOS</Typography>
      <Button
        variant="outlined"
        startIcon={<PlusIcon />}
        color="secondary"
        onClick={onCreateClick}
      >
        Adicionar
      </Button>
    </STitleWrapper>
  );
}

export default TitleHome;
