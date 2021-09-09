// Our auth reducer for handling user login + registration
// The store should hold:
//      1) The jwt if provided, or false |||DONE|||
//      2) An error message if provided, or false |||DONE|||
//      3) A loading Boolean for pending API calls |||DONE|||
//
//  Create tests for this module
//
// Needs action creators:
//      1) User login: should make an API call to the server with the provided details
//          1.1) OnSuccess:
//              1.1.1) Store the jwt from the headers in this store |||HOW TO ACCESS HEADERS FROM PAYLOAD???|||
//              1.1.2) Store the user data in the user store |||CREATE ACTION CREATER IN USER SLICE AND CALL IN  ONSUCCESS||
//              1.1.3) Reroute the user to the dashboard? |||HOW TO DO THIS???|||
//          1.2) On Failure:
//              1.2.1) Store error message in this store |||DONE|||
//          1.3) On Pending:
//              1.3.1) Set the loading value to true |||DONE|||
//
//      2) User registration: should make an API post to server with name, email, password
//          NOTE: Identical to Login, only with different route and an extra name parameter - combine somehow?
//          2.1) OnSuccess:
//              2.1.1) Store the jwt from the headers in this store
//              2.1.2) Store the user data in the user store
//              2.1.3) Reroute the user to the dashboard?
//          2.2) On Failure:
//              1.2.1) Store error message in this store
//          2.3) On Pending:
//              1.3.1) Set the loading value to true
//
//      3) Create an auxiliarry function that calls the API middleware

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

// export interface AuthState {
//   jwt: string;
//   error: string;
//   loading: boolean;
// }

// const initialState: AuthState = {
//   jwt: "",
//   error: "",
//   loading: false,
// };
const initialState = {
  jwt: "",
  error: "",
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequested: (state) => {
      state.loading = true;
      state.error = "";
    },
    loginFailed: (state, action) => {
      state.error = "Error: " + action.payload.data;
      state.loading = false;
    },
    loginSuccessful: (state, action) => {
      console.log(action);
      state.jwt = action.payload.data.name; // HEADER???
      state.loading = false;
      /// CALL ACTION CREATOR FROM USER SLICE TO STORE USER DATA
    },
  },
});

export const {
  loginRequested,
  loginFailed,
  loginSuccessful,
} = authSlice.actions;

export default authSlice.reducer;

const url = "/auth";
export const loginUser = (loginDetails) => (dispatch, getState) => {
  // const { lastFetch } = getState().cuisines;
  // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

  // if (diffInMinutes < 60) return;

  return dispatch(
    apiCallBegan({
      url,
      method: "post",
      data: loginDetails,
      onStart: loginRequested.type,
      onSuccess: loginSuccessful.type,
      onError: loginFailed.type,
    })
  );
};
