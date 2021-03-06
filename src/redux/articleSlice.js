import { createSlice } from "@reduxjs/toolkit";

import { includesNew } from "../helpers/articles";

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    news: [],
    newsCurrent: {},
  },
  reducers: {
    insertNew: (state, action) => {
      const news = state.news;
      if (!includesNew(news, action.payload)) news.push(action.payload);
      state.news = news;
    },
    insertNewCurrent: (state, action) => {
      const { id } = action.payload;
      const newsCurrent = state.news.filter((newObj) => newObj.id === id)[0];

      state.newsCurrent = newsCurrent;
    },
    deleteNew: (state, action) => {
      const news = state.news;
      const { id } = action.payload;
      news.forEach((newObj, index) => {
        if (newObj.id === id) delete news[index];
      });
    },
    onChange: (state, action) => {
      const news = state.news;
      const { changed, field, id } = action.payload;
      news.forEach((newObj) =>
        newObj.id === id ? (newObj[field] = changed) : ""
      );
    },
  },
});

export const {
  insertNew,
  insertNewCurrent,
  deleteNew,
  onChange,
} = articleSlice.actions;

export const selectNews = (state) => state.article.news;
export const selectNewsCurrent = (state) => state.article.newsCurrent;

export default articleSlice.reducer;
