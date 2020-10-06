import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../redux/articleSlice";
import modalReducer from "../redux/modalSlice";

export default configureStore({
  reducer: {
    article: articleReducer,
    modal: modalReducer,
  },
});
