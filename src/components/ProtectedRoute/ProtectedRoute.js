import { Route, Redirect } from "react-router-dom";
import fakeAuth from "../../service/FakeAuth";

const ProtectedRoute = ({ children, ...rest }) => {
  console.log(fakeAuth.isAuthenticated);
  console.log(rest.path);

  return (
    <Route
      {...rest}
      render={({ location, history }) => {
        if (fakeAuth.isAuthenticated === true) {
          console.log("hererer");
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
        }
      }}
    />
  );
};
export default ProtectedRoute;
