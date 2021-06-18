import React from "react";
import "./SignIn.css";

const SignIn = ({ onSignInClick }) => {
  return (
    <div
      className="signIn font-medium text-base w-44 m-8"
      onClick={onSignInClick}
    >
      Sign In
    </div>
  );
};

export default SignIn;
