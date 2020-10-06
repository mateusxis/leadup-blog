import React from "react";
import { useDispatch } from "react-redux";

import { openModal } from "../redux/modalSlice";
import TitleHome from "../components/TitleHome";

function TitleHomeContainer() {
  const dispatch = useDispatch();
  const onCreateClick = () =>
    dispatch(openModal({ type: "modalCreate" }));

  return <TitleHome onCreateClick={() => dispatch(onCreateClick)} />;
}

export default TitleHomeContainer;
