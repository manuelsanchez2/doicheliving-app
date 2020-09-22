import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import GridContainer from "../../../components/GridContainer";
import DestinationPageMainImageContainer from "../../../components/DestinationPageMainImageContainer";
import DestinationPageMainContent from "../../../components/DestinationPageMainContent";
import munichSrc from "../assets/munich.jpg";

const Munich = () => {
  return (
    <GridContainer>
      <Header />
      <div>
        <DestinationPageMainImageContainer
          src={munichSrc}
          alt="picture of Munich"
        />
        <DestinationPageMainContent
          title="Múnich"
          description="Muchos relacionaréis directamente Múnich con la fiesta de la cerveza: el Oktoberfest. ¡Y no es para menos! ¡Pero Múnich no es solo eso! Estamos ante la ciudad más grande de Alemania después de Berlín y Hamburgo, y ante una de las pocas ciudades que puede presumir de tener una arquitectura tan única cargada de palacios y residencias reales. ¡Sin duda una de las ciudades más bonitas de Alemania! "
          subtitle="Todo lo que debes saber sobre Hamburgo"
          src={munichSrc}
          alt=""
        />
      </div>
      <Footer />
    </GridContainer>
  );
};

export default Munich;
