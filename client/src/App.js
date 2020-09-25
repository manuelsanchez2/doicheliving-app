import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Questions from "./pages/Questions/Questions";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Register from "./pages/Register";
import Hamburg from "./pages/destinations/Hamburg/Hamburg";
import Cologne from "./pages/destinations/Cologne/Cologne";
import Munich from "./pages/destinations/Munich/Munich";
import Frankfurt from "./pages/destinations/Frankfurt/Frankfurt";
import Berlin from "./pages/destinations/Berlin/Berlin";
import SearchRouter from "./SearchRouter";

function App() {
  return (
    <>
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
            <SearchRouter />
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
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/destinations/hamburg">
            <Hamburg />
          </Route>
          <Route path="/destinations/cologne">
            <Cologne />
          </Route>
          <Route path="/destinations/berlin">
            <Berlin />
          </Route>
          <Route path="/destinations/munich">
            <Munich />
          </Route>
          <Route path="/destinations/frankfurt">
            <Frankfurt />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
