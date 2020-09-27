import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import GridContainer from "../../components/GridContainer";

const Questions = () => {
  return (
    <GridContainer>
      <Header />

      <Main>
        <h2>Preguntas frecuentes</h2>
        <p>
          A continuación te dejamos algunas de las preguntas más frecuentes que
          te puedes hacer con respecto a Doiche Living y a la aplicación.
        </p>
        <h3>¿Doiche Living es una agencia de viajes?</h3>
        <p>
          No, la diferencia con una agencia de viajes es que básicamente{" "}
          <strong>aquí tienes el control completo de tu viaje</strong>. Es
          decir, tú eres el protagonista de tu viaje y vas a poder planear el
          viaje que desees a Alemania sencillamente siguiendo nuestros consejos.
        </p>
        <h3>¿Es peligroso viajar a Alemania con la situación actual?</h3>
        <p>
          Cierto es que la idea de viajar que teníamos pre-pandemia ha cambiado
          de forma radical.{" "}
          <strong>
            Es importante que consultes las restricciones que tiene Alemania con
            tu país de origen antes de que viajes.
          </strong>{" "}
          ¡No querrás llegar y quedarte encerrado 14 días!
        </p>
        <h3>¿Y todo lo hacéis gratis?</h3>
        <p>
          En nuestra app y en nuestra página web vas a encontrar un montón de
          información de utilidad para organizar tu viaje. Cada vez que
          organizas algo a través de nosotros nos llevamos una pequeña comisión.{" "}
          <strong>
            ¡De esa forma podemos seguir haciéndote contenido de calidad y
            seguir ayudándote!
          </strong>
        </p>
        <h3>¿Se puede colaborar con vosotros?</h3>
        <p>
          ¿Te gusta nuestro proyecto? Cuéntanos más personalmente vía email a{" "}
          <a href="mailto: info@doicheliving.com">info@doicheliving.com</a> O si
          lo prefieres, también nos encontrarás por{" "}
          <a href="https://www.instagram.com/doicheliving/">Instagram</a> o por{" "}
          <a href="https://www.facebook.com/blogdoicheliving/">Facebook</a>.
        </p>
      </Main>

      <Footer />
    </GridContainer>
  );
};

export default Questions;
