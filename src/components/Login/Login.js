import React from "react";
import { BrowserRouter as Redirect } from "react-router-dom";
import fakeAuth from "../../service/FakeAuth";
import { useLocation } from "react-router-dom";

function Login() {
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  const login = () =>
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });

  const { state } = useLocation();

  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <div>
      <p>You must log in to view the page</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
export default Login;
