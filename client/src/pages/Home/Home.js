import React from "react";

import Mailchimp from "react-mailchimp-form";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import pictureTest from "../../assets/images/picture-test-1.jpg";
import pictureTest2 from "../../assets/images/picture-test-2.jpg";
import pictureTest3 from "../../assets/images/picture-test-3.jpg";
import instagramSrc from "../../assets/icons/social-instagram.svg";
import facebookSrc from "../../assets/icons/social-facebook.svg";
import mailSrc from "../../assets/icons/social-mail.svg";
import shareSrc from "../../assets/icons/social-share.svg";
import BigPictureContainer from "../../components/BigPictureContainer/BigPictureContainer";
import SmallPictureContainer from "../../components/SmallPictureContainer/SmallPictureContainer";
import HomeSocialSection from "../../components/HomeSocialSection/HomeSocialSection";

const url =
  "https://doicheliving.us20.list-manage.com/subscribe/post?u=9cdf1aa6dc72fdfd1cda13b58&amp;id=aba90a6fa5";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  > * {
    margin-right: 0.3rem;
  }
`;

const Login = () => {
  return (
    <div className="container">
      <Header />
      <div className="main--main">
        <h2>¿Qué quieres descubrir de Alemania?</h2>
        <h3>Organiza tu viaje</h3>
        <CarouselContainer>
          <BigPictureContainer to={"/login"} src={pictureTest} alt="" />
          <BigPictureContainer to={"/login"} src={pictureTest} alt="" />
          <BigPictureContainer to={"/login"} src={pictureTest} alt="" />
          <BigPictureContainer to={"/login"} src={pictureTest} alt="" />
          <BigPictureContainer to={"/login"} src={pictureTest} alt="" />
        </CarouselContainer>

        <h3>Destinos más populares</h3>
        <CarouselContainer>
          <SmallPictureContainer to={"/login"} src={pictureTest2} alt="" />
          <SmallPictureContainer to={"/login"} src={pictureTest2} alt="" />
          <SmallPictureContainer to={"/login"} src={pictureTest2} alt="" />
          <SmallPictureContainer to={"/login"} src={pictureTest2} alt="" />
          <SmallPictureContainer to={"/login"} src={pictureTest2} alt="" />
        </CarouselContainer>
        <h3>Rutas por Alemania</h3>
        <CarouselContainer>
          <BigPictureContainer to={"/login"} src={pictureTest3} alt="slawo" />
          <BigPictureContainer to={"/login"} src={pictureTest3} alt="" />
          <BigPictureContainer to={"/login"} src={pictureTest3} alt="" />
          <BigPictureContainer to={"/login"} src={pictureTest3} alt="" />
          <BigPictureContainer to={"/login"} src={pictureTest3} alt="" />
        </CarouselContainer>

        {/* SUBSCRIBE SECTION  */}

        <section className="subscribe__section">
          <p className="subscribe__section__text">
            ¡Suscríbete a nuestra newsletter y estate al tanto de todas nuestras
            novedades!
          </p>
          <div className="subscribe__section__field">
            <Mailchimp
              action={url}
              fields={[
                {
                  name: "FNAME",
                  placeholder: "Tu nombre",
                  type: "name",
                  required: true,
                },
                {
                  name: "EMAIL",
                  placeholder: "Tu email",
                  type: "email",
                  required: true,
                },
              ]}
              messages={{
                sending: "Enviando...",
                success: "¡Gracias por suscribirte a Doiche Living!",
                error: "Hemos tenido un problema interno. Estamos en ello :).",
                empty:
                  "Tienes que rellenar todos los datos para suscribirte a Doiche Living.",
                duplicate:
                  "Has intentado introducir demasiadas veces el mismo correo.",
                button: "ENVIAR",
              }}
            />
          </div>
        </section>

        <HomeSocialSection>
          <h3>¿Te gusta Doiche Living?</h3>
          <div className="social__section__container">
            <div className="social__item__container">
              <img src={instagramSrc} alt="" />
              <small>Síguenos en Instagram</small>
            </div>
            <div className="social__item__container">
              <img src={mailSrc} alt="" />
              <small>Contacta con nosotros</small>
            </div>
            <div className="social__item__container">
              <img src={facebookSrc} alt="" />
              <small>Síguenos en Facebook</small>
            </div>
            <div className="social__item__container">
              <img src={shareSrc} alt="" />
              <small>Comparte la aplicación</small>
            </div>
          </div>
        </HomeSocialSection>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
