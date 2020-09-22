import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import GridContainer from "../../../components/GridContainer";
import DestinationPageMainImageContainer from "../../../components/DestinationPageMainImageContainer";
import DestinationPageMainContent from "../../../components/DestinationPageMainContent";
import cologneSrc from "../assets/cologne.jpg";

const Cologne = () => {
  return (
    <GridContainer>
      <Header />
      <div>
        <DestinationPageMainImageContainer
          src={cologneSrc}
          alt="picture of Cologne"
        />
        <DestinationPageMainContent
          title="Colonia"
          description="Colonia, también conocido como Cologne en inglés o Köln en alemán, es la ciudad más visitada del Estado Federado de Renania del Norte-Westfalia, a pesar de no ser la capital del Estado. Además, seguro que has escuchado hablar de la famosa Catedral de Colonia, que es el monumento más visitado de toda Alemania. Y, cómo no, de su Carnaval."
          subtitle="Todo lo que debes saber sobre Colonia"
          src={cologneSrc}
          alt=""
        />
      </div>
      <Footer />
    </GridContainer>
  );
};

export default Cologne;
