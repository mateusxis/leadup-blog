import React from "react";

import Card from "../components/Card";

function CardContainer({ title, imageUrl, description, id }) {
  const onEditClick = (id) => console.log(id)
  const onDeleteClick = (id) => console.log(id) 

  return (
    <Card id={id} title={title} imageUrl={imageUrl} description={description} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
  );
}

export default CardContainer;
