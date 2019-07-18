import React from "react";
import ReactDOM from "react-dom";

import SignInForm from "./signing-in-page/sign-in-form";

import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <SignInForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
