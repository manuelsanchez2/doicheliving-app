import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main/Main";
import GridContainer from "../../components/GridContainer/GridContainer";
import styled from "@emotion/styled";

const ProfileOptions = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;

  small {
    opacity: 0.7;
    margin: 1.2rem;
    align-self: flex-end;
  }
`;

const ProfileBody = styled.div`
  p {
    opacity: 0.7;
  }
`;

const Profile = () => {
  return (
    <GridContainer>
      <Header />
      <Main>
        <h2>¡Hola, Manuel!</h2>
        <p>
          En la sección de tu perfil encontraras los artículos que hayas
          guardado como favoritos además de los puntos del mapa que hayas
          añadido.
        </p>
        <h3>Tus artículos favoritos</h3>
        <ProfileBody>
          <p>No hay ningún artículo en favoritos</p>
          <p>
            Puedes añadirlos haciendo click en el icono de la estrella que
            encontrarás en cada artículo.
          </p>
        </ProfileBody>
        <h3>Tus marcadores en el mapa</h3>
        <ProfileBody>
          <p>No has añadido ningun marcador al mapa</p>
          <p>
            Para añadirlos simplemente tienes que ir a la sección del mapa,
            buscar el lugar que quieras añadir y hacer doble click en él. ¡Así
            de fácil!
          </p>
        </ProfileBody>
        <ProfileOptions>
          <small>Cerrar sesión</small>
          <small>Eliminar cuenta</small>
        </ProfileOptions>
      </Main>
      <Footer />
    </GridContainer>
  );
};

export default Profile;
