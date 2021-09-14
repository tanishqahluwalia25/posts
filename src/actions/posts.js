import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CREATE_NEW_POST,
  CREATE_NEW_POST_SUCCESS,
  LOAD_POSTS,
  LOAD_POSTS_FAIL,
  LOAD_POSTS_SUCCESS,
} from "../reducers/posts";

const postsAction = createAsyncThunk("posts", (_, thunkAPI) => {
  thunkAPI.dispatch(LOAD_POSTS());
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      thunkAPI.dispatch(LOAD_POSTS_SUCCESS(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      thunkAPI.dispatch(LOAD_POSTS_FAIL([err]));
    });
});

export const createPostAction = createAsyncThunk("posts", (data, thunkAPI) => {
  thunkAPI.dispatch(CREATE_NEW_POST(data));
});

export default postsAction;
