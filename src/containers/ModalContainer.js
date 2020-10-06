import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ModalEdit from "../components/ModalEdit";
import { closeModal, openModal, selectModal } from "../redux/modalSlice";

const ModalContainer = () => {

  const modal = useSelector(selectModal);

  const getModal = (modal) => {
    switch(modal) {
      case 'modalEdit':
        return <ModalEdit />
      default:
        return null
    }
  }

  return modal.active ? getModal(modal.type) : "";
};

export default ModalContainer;
