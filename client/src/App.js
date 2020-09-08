import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GlobalCSS from "./GlobalCSS";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalCSS />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editeee <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
