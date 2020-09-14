import React from "react";

import Mailchimp from "react-mailchimp-form";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styled from "@emotion/styled";
import PictureTest from "../../assets/images/picture-test-1.jpg";
import PictureTest2 from "../../assets/images/picture-test-2.jpg";
import PictureTest3 from "../../assets/images/picture-test-3.jpg";
import instagramSrc from "../../assets/icons/social-instagram.svg";
import facebookSrc from "../../assets/icons/social-facebook.svg";
import mailSrc from "../../assets/icons/social-mail.svg";
import shareSrc from "../../assets/icons/social-share.svg";
import { Link } from "react-router-dom";

const url =
  "https://doicheliving.us20.list-manage.com/subscribe/post?u=9cdf1aa6dc72fdfd1cda13b58&amp;id=aba90a6fa5";

const BigPictureContainer = styled.div`
  width: 35vw;
  height: 23vh;
  border: 1px solid var(--color-darkgrayborder);
  border-radius: 20px;
  box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);

  img {
    object-fit: cover;
    height: 100%;
    border-radius: 20px;
  }
`;

const SmallPictureContainer = styled.div`
  width: 30vw;
  height: 15vh;
  border: 1px solid var(--color-darkgrayborder);
  border-radius: 20px;
  box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);

  img {
    object-fit: cover;
    height: 100%;
    border-radius: 20px;
  }
`;

const Login = () => {
  return (
    <div className="container">
      <Header />
      <div className="main--main">
        <h2>¿Qué quieres descubrir de Alemania? </h2>
        <h3>Organiza tu viaje</h3>
        <OwlCarousel
          className="owl-theme"
          touchDrag
          margin={10}
          items="2.5"
          lazyLoad
          dots={false}
          animateIn={true}
          rewind={false}
        >
          <BigPictureContainer>
            <Link to="/login">
              <img src={PictureTest} alt="" />
            </Link>
          </BigPictureContainer>
          <BigPictureContainer>
            <img src={PictureTest} alt="" />
          </BigPictureContainer>
          <BigPictureContainer>
            <img src={PictureTest} alt="" />
          </BigPictureContainer>
          <BigPictureContainer>
            <img src={PictureTest} alt="" />
          </BigPictureContainer>
          <BigPictureContainer>
            <img src={PictureTest} alt="" />
          </BigPictureContainer>
        </OwlCarousel>

        <h3>Destinos más populares</h3>
        <OwlCarousel
          className="owl-theme"
          touchDrag
          margin={10}
          items="3"
          lazyLoad
          rewind={false}
          dots={false}
          animateIn={true}
        >
          <SmallPictureContainer>
            <img src={PictureTest2} alt="" />
          </SmallPictureContainer>
          <SmallPictureContainer>
            <img src={PictureTest2} alt="" />
          </SmallPictureContainer>
          <SmallPictureContainer>
            <img src={PictureTest2} alt="" />
          </SmallPictureContainer>
          <SmallPictureContainer>
            <img src={PictureTest2} alt="" />
          </SmallPictureContainer>
          <SmallPictureContainer>
            <img src={PictureTest2} alt="" />
          </SmallPictureContainer>
        </OwlCarousel>
        <h3>Rutas por Alemania</h3>
        <OwlCarousel
          className="owl-theme"
          touchDrag
          margin={10}
          items="2.5"
          lazyLoad
          dots={false}
          animateIn={true}
          rewind={false}
        >
          <BigPictureContainer>
            <img src={PictureTest3} alt="" />
          </BigPictureContainer>
          <BigPictureContainer>
            <img src={PictureTest3} alt="" />
          </BigPictureContainer>
          <BigPictureContainer>
            <img src={PictureTest3} alt="" />
          </BigPictureContainer>
          <BigPictureContainer>
            <img src={PictureTest3} alt="" />
          </BigPictureContainer>
          <BigPictureContainer>
            <img src={PictureTest3} alt="" />
          </BigPictureContainer>
        </OwlCarousel>

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

        <section className="social__section">
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
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
