import React from "react";
import { useDispatch } from "react-redux";

import { openModal } from "../redux/modalSlice";
import TitleHome from "../components/TitleHome";

function TitleHomeContainer() {
  const dispatch = useDispatch();
  const onCreateClick = (id) => dispatch(openModal({ type: "modalCreate", id }));

  return (
    <TitleHome
      onCreateClick={() => dispatch(onCreateClick)}
    />
  );
}

export default TitleHomeContainer;
