import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import GridContainer from "../../components/GridContainer";
import styled from "@emotion/styled";
import AboutPersonContainer from "../../components/AboutPersonContainer";
import manuelSrc from "../../assets/admins/manuel.png";
import miriamSrc from "../../assets/admins/miriam.png";
import lauraSrc from "../../assets/admins/laura.png";
import nuriaSrc from "../../assets/admins/nuria.png";
import mariaSrc from "../../assets/admins/maria.png";

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  height: 0;
  border-radius: 5px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const About = () => {
  return (
    <GridContainer>
      <Header />

      <Main>
        <h2>¿Qué es Doiche Living?</h2>
        <p>
          Doiche Living es un blog de viajes por Alemania fundado a mediados de
          2019 en el que la máxima es que el protagonista seas tú: Nosotros
          estaremos ahí para echarte una mano y asesorarte, pero serás tú desde
          el minuto 1 el que se organice un viaje a Alemania que jamás olvidará.
        </p>
        <VideoContainer>
          <iframe
            title="Doicheliving"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UlXPz9k9_tQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoContainer>
        <h3>La plantilla de Doiche Living</h3>
        <nav>
          <AboutPersonContainer
            src={manuelSrc}
            alt="manuel"
            name="Manuel Sánchez - Fundador & CEO"
            description="Desde hace unos años alterno España y Alemania porque siempre encuentro una razón que me hace volver al país germano. Asentado en Hamburgo desde hace casi dos años, mi objetivo con este blog es contarte todo lo que tienes que ver en este país tan increíble mientras aprendes lo fácil que es organizarte un viaje por tu cuenta a Alemania."
          />
          <AboutPersonContainer
            src={miriamSrc}
            alt="miriam"
            name="Miriam Amat - Diseño & Community Management"
            description="Ahora vivo en Hamburgo al igual que el jefe, pero antes he vivido en Kiel, en Berlín y en Regensburg. Gracias a haber pasado casi 4 años en Alemania, ¡ he podido recorrer tanto grandes metrópolis como pueblos recónditos! ¡Espero que tras leer sobre este país te entre el gusanillo de visitarlo!"
          />
          <AboutPersonContainer
            src={lauraSrc}
            alt="laura"
            name="Laura Gómez - Redactora & Community Management"
            description="Actualmente vivo en España, pero he pasado algunas temporadas en Alemania, concretamente en Leipzig y Lippstadt. Durante ese tiempo viajé por el país teutón y descubrí lo increíble que es su cultura, su geografía y su gente. Soy una enamorada de Alemania y ¡pretendo que tú también acabes siéndolo con todo lo que publique!"
          />
          <AboutPersonContainer
            src={nuriaSrc}
            alt="nuria"
            name="Nuria Cabezas - Redactora & Community Management"
            description="Después de vivir dos años en Múnich, Baviera se convirtió en mi segundo hogar. ¿El motivo? No solo sus ciudades y paisajes de cuento, sino la calidad de vida y su gente consiguieron que esta región se convirtiera en mi lugar favorito para vivir. En mis posts te contaré todo lo que debes saber sobre la capital bávara y alrededores."
          />

          <AboutPersonContainer
            src={mariaSrc}
            alt="maria"
            name="María de Torres - Experta en Berlín"
            description="Nací en Almería pero vivo en Berlín desde hace un par de años. Aunque comencé mis aventuras alemanas en Friburgo de Brisgovia y Münster, Berlín tiene ese no sé qué que ha hecho que me quede. Es por eso que quiero ser una de las responsables de que te enamores de la capital germana."
          />
        </nav>
        <h3>¿Quieres colaborar con Doiche Living?</h3>
        <p>
          Si crees que encajarías en un proyecto como este puedes contactarnos a
          través de{" "}
          <a href="mailto: info@doicheliving.com">info@doicheliving.com</a>{" "}
          contándonos algo sobre ti y dándonos algunos detalles sobre lo que
          crees que puedes aportar a la plantilla. ¡Te esperamos!
        </p>
      </Main>

      <Footer />
    </GridContainer>
  );
};

export default About;
