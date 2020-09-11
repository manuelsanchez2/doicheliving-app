import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <GlobalStyles />
      <Router>
        <Header />
        <div className="main">
          <h2>¿Qué quieres descubrir de Alemania? </h2>
          <h3>Organiza tu viaje</h3>
          <p>
            lorem opsum sjfkdsjfhjs dhfjshfjdsfhsd jkfdhfjsdhfjsdfhsdf
            shdfjsdfhsdfsdf
          </p>
          <h3>Destinos más populares</h3>
          <p>
            lorem opsum sjfkdsjfhjsdhfj shfjdsfhsdjkfdhfjsdh fjsdfhsdfshdf
            jsdfhsdfsdf
          </p>
          <h3>Rutas por Alemania</h3>
          <p>
            lorem opsum sjfkdsjfhjsd hfjshfjdsfhsdj kfdhfjsdhfj sdfhsdfshdfjsdfh
            sdfsdf
          </p>
          <h3>Suscribete con nosotros</h3>
          <p>Si quieres formar parte del equipo de Doiche Living..</p>
          <h3>Iconos</h3>
          <p>Aqui vamos a tener unos supericonos</p>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
