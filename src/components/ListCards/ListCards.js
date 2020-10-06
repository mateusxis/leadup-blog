import React from "react";

import Card from "../../containers/CardContainer";

import { SContainer, SItem } from "./styles";

const ListCards = ({ cards }) => {
  return (
    <SContainer container spacing={3}>
      {cards.map((card) => (
        <SItem key={card.id} item xs={12} md={6} lg={4} xl={3}>
          <Card
            id={card.id}
            title={card.title}
            imageUrl={card.imageUrl}
            description={card.description}
          />
        </SItem>
      ))}
    </SContainer>
  );
};

export default ListCards;
