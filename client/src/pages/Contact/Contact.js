import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import GridContainer from "../../components/GridContainer";
import styled from "@emotion/styled";
import SubmitButton from "../../components/SubmitButton";

const ImageContact = styled.img`
  width: 100%;
  margin-bottom: 0.5em;
  border-radius: 10px;
`;

const Contact = () => {
  return (
    <GridContainer>
      <Header />

      <Main>
        <h2>¿Necesitas ayuda?</h2>
        <p>
          ¿Tienes algún problema a la hora de organizar tu viaje? ¿Algo con el
          alojamiento? ¿Quizá con el transporte? ¡No te preocupes!{" "}
          <strong>
            Reserva con nosotros una cita completamente gratis y sin compromiso
            en la que te ayudaremos con lo que necesites.
          </strong>{" "}
          Puedes hacerlo haciendo click{" "}
          <a
            href="https://asesoramiento-doiche-living.youcanbook.me/"
            rel="noopener noreferrer"
            target="_blank"
          >
            aquí.
          </a>
        </p>
        <a
          href="https://asesoramiento-doiche-living.youcanbook.me/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <ImageContact
            src=" https://i.imgur.com/h8CszaY.jpg"
            alt="asesoramiento doicheliving"
          />
        </a>
        <SubmitButton>RESERVAR ASESORAMIENTO</SubmitButton>
      </Main>

      <Footer />
    </GridContainer>
  );
};

export default Contact;
