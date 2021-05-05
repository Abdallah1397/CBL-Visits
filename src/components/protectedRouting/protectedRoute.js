import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import PopUp from "../Popup/Popup";
const ProtectedRouting = ({
  isAuth: isAuth,
  component: Component,
  logout: logout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component logout={logout} />;
        } else {
          return (
            <div>
              <PopUp
                text="Sign In to show the Visits "
                afterClosePath="/"
                goto="/signin"
              />
            </div>
          );
        }
      }}
    />
  );
};
export default ProtectedRouting;
