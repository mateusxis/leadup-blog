import React from "react";
import { Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";

import ListCard from "../../containers/ListCardsContainer";
import Modal from "../../containers/ModalContainer";
import TitleHome from "../../containers/TitleHomeContainer";
import Store from "../../containers/StoreContainer";
import Header from "../../components/Header";
import { isAuthenticated, logout } from "../../services/auth";

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
      <TitleHome />
      <ListCard />
      <Store />
      <Modal />
    </Container>
  );
};

export default Home;
