import React from "react";
import GlobalStyles from "./GlobalStyles";
import doichelivingSrc from "./assets/images/doicheliving-logo.png";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <header className="header">
          <img src={doichelivingSrc} alt="" />
          <img src={doichelivingSrc} alt="" />
          <img src={doichelivingSrc} alt="" />
        </header>
        <main className="main">
          <h2>¿Qué quieres descubrir de Alemania? </h2>
          <h3>Organiza tu viaje</h3>
          <p>
            lorem opsum
            sjfkdsjfhjsdhfjshfjdsfhsdjkfdhfjsdhfjsdfhsdfshdfjsdfhsdfsdf
          </p>
          <h3>Destinos más populares</h3>
          <p>
            lorem opsum
            sjfkdsjfhjsdhfjshfjdsfhsdjkfdhfjsdhfjsdfhsdfshdfjsdfhsdfsdf
          </p>
          <h3>Rutas por Alemania</h3>
          <p>
            lorem opsum
            sjfkdsjfhjsdhfjshfjdsfhsdjkfdhfjsdhfjsdfhsdfshdfjsdfhsdfsdf
          </p>
        </main>
        <footer className="footer">
          <img src={doichelivingSrc} alt="" />
          <img src={doichelivingSrc} alt="" />
          <img src={doichelivingSrc} alt="" />
          <img src={doichelivingSrc} alt="" />
        </footer>
      </div>
    </>
  );
}

export default App;
