import React from "react";
import { useDispatch } from "react-redux";

import { insertNewCurrent } from "../redux/articleSlice";
import { openModal } from "../redux/modalSlice";
import Card from "../components/Card";

function CardContainer({ title, imageUrl, description, id }) {
  const dispatch = useDispatch();
  const onEditClick = (id) => {
    dispatch(insertNewCurrent({ id }));
    dispatch(openModal({ type: "modalEdit", id }));
  };
  const onDeleteClick = (id) =>
    dispatch(openModal({ type: "modalDelete", id }));
  const onOpenClick = (id) => {
    dispatch(insertNewCurrent({ id }));
    dispatch(openModal({ type: "modalArticle", id }));
  };

  return (
    <Card
      id={id}
      title={title}
      imageUrl={imageUrl}
      description={description}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
      onOpenClick={onOpenClick}
    />
  );
}

export default CardContainer;
