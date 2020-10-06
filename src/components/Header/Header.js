import React from "react";
import { Button } from "@material-ui/core";

import { ReactComponent as LogoutIcon } from "../../assets/icons/log-out.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { SHeader } from "./styles";

const Header = ({ onLogoutClick }) => {
  return (
    <SHeader>
      <LogoIcon />
      <Button
        variant="outlined"
        startIcon={<LogoutIcon />}
        color="primary"
        onClick={onLogoutClick}
      >
        Sair
      </Button>
    </SHeader>
  );
};

export default Header;
