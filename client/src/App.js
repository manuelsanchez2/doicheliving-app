import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Map from "./pages/Map";

function App() {
  return (
    <div className="container">
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
