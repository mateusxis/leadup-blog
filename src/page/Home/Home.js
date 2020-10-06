import React from "react";
import { Redirect } from "react-router-dom";
import { Button, Container, Typography } from "@material-ui/core";

import { ReactComponent as PlusIcon } from "../../assets/icons/plus-circle.svg";
import ListCard from "../../containers/ListCardsContainer";
import Store from "../../containers/StoreContainer";
import Header from "../../components/Header";
import { isAuthenticated, logout } from "../../services/auth";

import { STitleWrapper } from "./styles";

const Home = () => {
  if (!isAuthenticated()) {
    return <Redirect to={"/"} />;
  }

  const onLogoutClick = () => {
    logout();
    window.location.reload(false);
  };

  return (
    <Container maxWidth="xl">
      <Header onLogoutClick={onLogoutClick} />
      <STitleWrapper>
        <Typography>ARTIGOS</Typography>
        <Button variant="outlined" startIcon={<PlusIcon />} color="secondary">
          Adicionar
        </Button>
      </STitleWrapper>
      <ListCard />
      <Store />
    </Container>
  );
};

export default Home;
