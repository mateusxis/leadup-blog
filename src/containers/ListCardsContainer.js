import React from "react";
import { useSelector } from "react-redux";

import { selectNews } from "../redux/articleSlice";
import ListCards from "../components/ListCards";

const ListCardsContainer = () => {
  const news = useSelector(selectNews);

  return <ListCards cards={news} />;
};

export default ListCardsContainer;
