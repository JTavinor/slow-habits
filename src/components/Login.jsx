import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/auth";

// Page where users can login to an account
// 1) Need form fields for email and password
//    1.1) Use the redux-form library to handle all forms
//        1.1.1) Create + configure the Redux store
//        1.1.2) Add middleware to handle API calls
// 2) Submit button
// 3) On submit
//    3.1) Bad email/password format - Show error message
//    3.2) Correct email/password format - Send API call to server
//        3.2.1) API request should be sent via Redux middleware
//        3.2.2) Bad request - Return error message and render on screen
//        3.2.3) Good request - Should receive a JWT, and be rerouted to the dashboard
// 4) Have link to registration page if users want to register
// 5) Add Google Oauth functionality

function Login() {
  const dispatch = useDispatch();
  const { jwt, error } = useSelector((state) => state.auth);
  return (
    <div>
      <h1>Login</h1>
      <p>{jwt}</p>
      <p>{error}</p>
      <button
        onClick={() =>
          dispatch(loginUser({ email: "joey1@gmail.com", password: "12345" }))
        }
      ></button>
    </div>
  );
}

export default Login;
