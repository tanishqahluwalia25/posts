import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loadResponse: [],
  loadSuccess: false,
  postCreated: false,
  createdPosts: [],
};

const postsSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {
    LOAD_POSTS: (state) => {
      state.isLoading = true;
      state.loadResponse = [];
      state.loadSuccess = false;
    },
    LOAD_POSTS_SUCCESS: (state, { payload }) => {
      state.isLoading = false;
      state.loadResponse = [...payload];
      state.loadSuccess = true;
    },
    LOAD_POSTS_FAIL: (state, { payload }) => {
      state.isLoading = false;
      state.loadResponse = payload;
      state.loadSuccess = false;
    },
    CREATE_NEW_POST: (state, { payload }) => {
      state.isLoading = true;
      state.postCreated = false;
      state.createdPosts = [payload, ...state.createdPosts];
    },
  },
});

export const {
  LOAD_POSTS,
  LOAD_POSTS_FAIL,
  LOAD_POSTS_SUCCESS,
  CREATE_NEW_POST,
  CREATE_NEW_POST_FAIL,
  CREATE_NEW_POST_SUCCESS,
} = postsSlice.actions;

export default postsSlice.reducer;
