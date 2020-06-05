/**
 * Created by Ljili on 2020/6/5.
 */
import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRouter({ children, ...rest }) {
  let user = JSON.parse(window.sessionStorage.getItem("user"));
  // console.log("PrivateRoute-user", user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default PrivateRouter;