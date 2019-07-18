import React, { Component } from "react";

import SignInTitle from "./sign-in-title";
import SignInBody from "./sign-in-body/sign-in-body";

export default class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      LoggedIn: "NOT_LOGGED_IN"
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      LoggedIn: "LOGGED_IN"
    });
  }

  handleSuccessfulLogout() {
    this.setState({
      LoggedIn: "NOT_LOGGED_IN"
    });
  }

  render() {
    return (
      <div className="form-container">
        <div className="left-side">
          <SignInTitle />
          <SignInBody
            LoggedIn={this.state.LoggedIn}
            handleSuccessfulLogin={this.handleSuccessfulLogin}
            handleSuccessfulLogout={this.handleSuccessfulLogout}
          />
        </div>
        <div className="right-side">
          <p>
            My alaskan adventrue was truely amazing thanks to this random sign
            in page!
          </p>
          <p>-No One Ever...</p>
        </div>
      </div>
    );
  }
}
