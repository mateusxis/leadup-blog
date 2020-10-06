import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    active: false,
    id: "",
    type: "",
  },
  reducers: {
    closeModal: (state) => {
      state.active = false;
      state.id = "";
      state.type = "";
    },
    openModal: (state, action) => {
      state.active = true;
      state.id = action.payload.id;
      state.type = action.payload.type;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;

export const selectModal = (state) => state.modal;

export default modalSlice.reducer;
