import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Search from "./pages/Search/Search";
import Questions from "./pages/Questions/Questions";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

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
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
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
