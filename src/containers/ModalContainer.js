import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ModalArticle from "../components/ModalArticle";
import ModalDelete from "../components/ModalDelete";
import ModalEdit from "../components/ModalEdit";
import ModalNotification from "../components/ModalNotification";
import { insertNewCurrent } from "../redux/articleSlice";
import { closeModal, openModal, selectModal } from "../redux/modalSlice";
import { selectNewsCurrent } from "../redux/articleSlice";

const ModalContainer = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const newsCurrent = useSelector(selectNewsCurrent);

  const getModal = (modal) => {
    switch (modal) {
      case "modalArticle":
        return (
          <ModalArticle
            onCloseClick={() => dispatch(closeModal())}
            id={newsCurrent.id}
            title={newsCurrent.title}
            imageUrl={newsCurrent.imageUrl}
            description={newsCurrent.description}
            onEditClick={(id) => {
              dispatch(insertNewCurrent({ id }));
              dispatch(openModal({ type: "modalEdit", id }));
            }}
            onDeleteClick={(id) => {
              dispatch(insertNewCurrent({ id }));
              dispatch(openModal({ type: "modalDelete", id }));
            }}
          />
        );
      case "modalCreate":
        return (
          <ModalEdit
            titleModal="CRIAR"
            onCloseClick={() => dispatch(closeModal())}
            onSaveClick={() => {
              dispatch(openModal({ type: "modalNotificationSave" }));
            }}
          />
        );
      case "modalDelete":
        return (
          <ModalDelete
            onCloseClick={() => dispatch(closeModal())}
            onDeleteClick={() => {
              dispatch(openModal({ type: "modalNotificationDelete" }));
            }}
          />
        );
      case "modalEdit":
        return (
          <ModalEdit
            titleModal="EDITAR"
            id={newsCurrent.id}
            titleArticle={newsCurrent.title}
            descriptionArticle={newsCurrent.description}
            onCloseClick={() => dispatch(closeModal())}
            onSaveClick={() => {
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
