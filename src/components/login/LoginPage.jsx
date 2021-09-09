import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";

import LoginForm from "./LoginForm";
import { loginUser } from "../../store/auth";

const loginFormFields = [
  {
    reference: "email",
    validation: {
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Please enter a valid email",
      },
      required: { value: true, message: "Email is required" },
    },
    type: "text",
    name: "Email",
  },
  {
    reference: "password",
    validation: {
      required: { value: true, message: "Password is required" },
      type: "password",
      minLength: {
        value: 5,
        message: "Password must be at least 5 characters",
      },
    },
    type: "password",
    name: "Password",
  },
];

const registerFormFields = [
  {
    reference: "name",
    validation: {
      required: { value: true, message: "Name is required" },
      minLength: { value: 2, message: "Name must be at least 2 characters" },
    },
    type: "text",
    name: "Name",
  },
  ...loginFormFields,
];

// Page containing two forms that move off or on the screen when toggled
function LoginPage() {
  const dispatch = useDispatch();
  // Variables + method used to set classname on form
  const [registerFormHidden, setRegisterFormHidden] = useState(true);
  const [loginFormHidden, setLoginFormHidden] = useState(false);

  const { loading: apiCallPending } = useSelector((state) => state.auth);
  console.log(apiCallPending);

  const swapForms = () => {
    if (apiCallPending) return;

    setRegisterFormHidden(!registerFormHidden);
    setLoginFormHidden(!loginFormHidden);
  };

  // Set these functions to whatever you want to do on form submission
  const onLoginSubmit = (data) => dispatch(loginUser(data));
  const onRegisterSubmit = (data) => console.log(data);

  return (
    <div className="overFlowControl">
      <div className="formPageContainer">
        <LoginForm
          changeFormButtonText="Go to Login"
          changeFormHeading="Already have an account?"
          formFields={registerFormFields}
          formHeading="Create Account"
          formHidden={registerFormHidden}
          formSubmit={onRegisterSubmit}
          submitFormButtonText="Register"
          hideFormClassName="hideToLeft"
          swapForms={swapForms}
        />
        <LoginForm
          changeFormButtonText="Register"
          changeFormHeading="Don't have an account?"
          formFields={loginFormFields}
          formHeading="Sign in to Slow Habits"
          formHidden={loginFormHidden}
          formSubmit={onLoginSubmit}
          hiddenClass={{ className: "loginHidden", initialHidden: false }}
          submitFormButtonText="Login"
          hideFormClassName="hideToRight"
          swapForms={swapForms}
        />
      </div>
    </div>
  );
}

export default LoginPage;
