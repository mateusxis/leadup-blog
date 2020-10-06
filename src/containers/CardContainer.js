import React from "react";
import { useDispatch } from "react-redux";

import { openModal } from "../redux/modalSlice";
import Card from "../components/Card";

function CardContainer({ title, imageUrl, description, id }) {
  const dispatch = useDispatch();
  const onEditClick = (id) => dispatch(openModal({ type: "modalEdit", id }));
  const onDeleteClick = (id) => dispatch(openModal({ type: "modalEdit", id }));

  return (
    <Card
      id={id}
      title={title}
      imageUrl={imageUrl}
      description={description}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
    />
  );
}

export default CardContainer;
