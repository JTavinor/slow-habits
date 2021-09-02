// Configuring our Redux store
// We will use Redux Toolkit to simplify the process
// To do this we need a reducer to pass to our configurestore function
//   1) Create a reducer for all user data
//   2) Create a reducer for auth
//   2) Create middleware for handling API calls
//   3) Create an action creator to make an API call to log in the user
// Once we have done these we can configure our store
//   1) Write tests for store configuration
//   2) Configure the store
//   3) Create the store: In index.js?

import authReducer from "./auth";
import thunk from "redux-thunk";
import api from "./middleware/api";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { auth: authReducer },
  middleware: [thunk, api],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
