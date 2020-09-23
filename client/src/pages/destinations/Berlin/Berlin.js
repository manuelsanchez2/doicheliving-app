import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import GridContainer from "../../../components/GridContainer";
import DestinationPageMainImageContainer from "../../../components/DestinationPageMainImageContainer";
import DestinationPageMainContent from "../../../components/DestinationPageMainContent";
import berlinSrc from "../assets/berlin.jpg";

const Berlin = () => {
  return (
    <GridContainer>
      <Header />
      <div>
        <DestinationPageMainImageContainer
          src={berlinSrc}
          alt="picture of Berlin"
        />
        <DestinationPageMainContent
          title="Berlín"
          description="Bienvenidos a la que es sin duda la ciudad más multicultural de toda Alemania: son cada vez más las personas que se deciden ya no solo a visitar la ciudad sino también a venirse a vivir a Berlín. Siendo tal y como es, una ciudad repleta de eventos culturales y sociales de cualquier tipo, pero al mismo tiempo sede de grandes empresas a nivel europeo o mundial, es normal que la mayoría de la gente quede atrapada en sus redes."
          subtitle="Todo lo que debes saber sobre Berlín"
          src={berlinSrc}
          alt=""
          imageTitle="Imprescindibles de Berlín"
        />
      </div>
      <Footer />
    </GridContainer>
  );
};

export default Berlin;
