import React from "react";
import { useDispatch } from "react-redux";

import { insertNew } from "../redux/articleSlice";

import { get } from "../services/api";

const Store = () => {
  const dispatch = useDispatch();

  get("/news").then((result) =>
    result.forEach((newObj) => dispatch(insertNew(newObj)))
  );

  return <></>;
};

export default Store;
