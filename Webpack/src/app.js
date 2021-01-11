import React from "react";
import ReactDOM from "react-dom";
import "./app.less";
import Login from "./login";

const App = () => (
  <>
    <h1>My First App</h1>
    <Login />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));

console.log("App loaded");
