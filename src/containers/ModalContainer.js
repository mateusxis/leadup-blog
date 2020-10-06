import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ModalDelete from "../components/ModalDelete";
import ModalEdit from "../components/ModalEdit";
import ModalNotification from "../components/ModalNotification";
import { closeModal, openModal, selectModal } from "../redux/modalSlice";

const ModalContainer = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);

  const getModal = (modal) => {
    switch (modal) {
      case "modalCreate":
        return (
          <ModalEdit
            titleModal="CRIAR"
            onCloseClick={() => dispatch(closeModal())}
            onSaveClick={() => {
              dispatch(closeModal());
              dispatch(openModal({ type: "modalNotificationSave" }));
            }}
          />
        );
      case "modalDelete":
        return (
          <ModalDelete
            onCloseClick={() => dispatch(closeModal())}
            onDeleteClick={() => {
              dispatch(closeModal());
              dispatch(openModal({ type: "modalNotificationDelete" }));
            }}
          />
        );
      case "modalEdit":
        return (
          <ModalEdit
            titleModal="EDITAR"
            onCloseClick={() => dispatch(closeModal())}
            onSaveClick={() => {
              dispatch(closeModal());
              dispatch(openModal({ type: "modalNotificationEdit" }));
            }}
          />
        );
      case "modalNotificationDelete":
        return (
          <ModalNotification
            message="ARTIGO EXCLUIDO COM SUCESSO"
            onCloseClick={() => dispatch(closeModal())}
          />
        );
      case "modalNotificationEdit":
        return (
          <ModalNotification
            message="ARTIGO ATUALIZADO"
            onCloseClick={() => dispatch(closeModal())}
          />
        );
      case "modalNotificationSave":
        return (
          <ModalNotification
            message="ARTIGO CRIADO"
            onCloseClick={() => dispatch(closeModal())}
          />
        );
      default:
        return null;
    }
  };

  return modal.active ? getModal(modal.type) : "";
};

export default ModalContainer;
