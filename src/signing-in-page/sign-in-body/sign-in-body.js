import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkiing } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";

export default function(props) {
  const handleSignIn = () => {
    props.handleSuccessfulLogin();
  };

  const handleSignOut = () => {
    props.handleSuccessfulLogout();
  };

  return (
    <div className="body-grid-wrapper">
      <div className="body-left">
        <div className="logo-one">
          <FontAwesomeIcon icon={faSkiing} />
        </div>
        <div className="logo-two">
          <FontAwesomeIcon icon={faTree} />
        </div>
        <div
          className="logged-status"
          style={{
            backgroundColor: props.LoggedIn === "LOGGED_IN" ? "#c4e79a" : null
          }}
        >
          {props.LoggedIn}
        </div>
      </div>
      <div className="body-right">
        <div className="login-components">
          <input type="text" placeholder="Enter thy Username..." />
        </div>
        <div className="login-components">
          <input type="password" placeholder="Enter thee Password" />
        </div>
        <div className="btn-wrapper">
          {props.LoggedIn === "NOT_LOGGED_IN" ? (
            <div className="login-btn" onClick={handleSignIn}>
              Login
            </div>
          ) : (
            <div className="sign-out-btn" onClick={handleSignOut}>
              Sign Out
            </div>
          )}
          <div className="sign-up-btn">Sign Up!</div>
        </div>
      </div>
    </div>
  );
}
