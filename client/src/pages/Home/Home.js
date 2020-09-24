import React from "react";

import Mailchimp from "react-mailchimp-form";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import pictureTest from "../../assets/images/picture-test-1.jpg";
import pictureTest3 from "../../assets/images/picture-test-3.jpg";
import instagramSrc from "../../assets/icons/social-instagram.svg";
import facebookSrc from "../../assets/icons/social-facebook.svg";
import mailSrc from "../../assets/icons/social-mail.svg";
import shareSrc from "../../assets/icons/social-share.svg";
import HomeBigPictureContainer from "../../components/HomeBigPictureContainer/HomeBigPictureContainer";
import HomeSmallPictureContainer from "../../components/HomeSmallPictureContainer/HomeSmallPictureContainer";
import HomeSocialSection from "../../components/HomeSocialSection/HomeSocialSection";
import HomeSocialSectionContainer from "../../components/HomeSocialSectionContainer/HomeSocialSectionContainer";
import HomeSocialSectionItemContainer from "../../components/HomeSocialSectionItemContainer/HomeSocialSectionItemContainer";
import Main from "../../components/Main/Main";
import HomeSubscribeSection from "../../components/HomeSubscribeSection";
import HomeSubscribeSectionText from "../../components/HomeSubscribeSectionText";
import HomeSubscribeSectionField from "../../components/HomeSubscribeSectionField/HomeSubscribeSectionField";
import HomeCarouselContainer from "../../components/HomeCarouselContainer";
import hamburgSrc from "../destinations/assets/hamburg.jpg";
import berlinSrc from "../destinations/assets/berlin.jpg";
import cologneSrc from "../destinations/assets/cologne.jpg";
import munichSrc from "../destinations/assets/munich.jpg";
import frankfurtSrc from "../destinations/assets/frankfurt.jpg";

const mailchimpUrl = process.env.REACT_APP_MAILCHIMP_URL;

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Main>
        <h2>¿Qué quieres descubrir de Alemania?</h2>
        <h3>Organiza tu viaje</h3>
        <HomeCarouselContainer>
          <HomeBigPictureContainer to={"/login"} src={pictureTest} alt="" />
          <HomeBigPictureContainer to={"/login"} src={pictureTest} alt="" />
          <HomeBigPictureContainer to={"/login"} src={pictureTest} alt="" />
          <HomeBigPictureContainer to={"/login"} src={pictureTest} alt="" />
          <HomeBigPictureContainer to={"/login"} src={pictureTest} alt="" />
        </HomeCarouselContainer>

        <h3>Destinos más populares</h3>
        <HomeCarouselContainer>
          <HomeSmallPictureContainer
            to={"/destinations/hamburg"}
            src={hamburgSrc}
            alt=""
            imageTitle="Hamburgo"
          />
          <HomeSmallPictureContainer
            to={"/destinations/berlin"}
            src={berlinSrc}
            alt=""
            imageTitle="Berlín"
          />
          <HomeSmallPictureContainer
            to={"/destinations/cologne"}
            src={cologneSrc}
            alt=""
            imageTitle="Colonia"
          />
          <HomeSmallPictureContainer
            to={"/destinations/frankfurt"}
            src={frankfurtSrc}
            alt=""
            imageTitle="Frankfurt"
          />
          <HomeSmallPictureContainer
            to={"/destinations/munich"}
            src={munichSrc}
            alt=""
            imageTitle="Múnich"
          />
        </HomeCarouselContainer>
        <h3>Rutas por Alemania</h3>
        <HomeCarouselContainer>
          <HomeBigPictureContainer to={"/login"} src={pictureTest3} alt="" />
          <HomeBigPictureContainer to={"/login"} src={pictureTest3} alt="" />
          <HomeBigPictureContainer to={"/login"} src={pictureTest3} alt="" />
          <HomeBigPictureContainer to={"/login"} src={pictureTest3} alt="" />
          <HomeBigPictureContainer to={"/login"} src={pictureTest3} alt="" />
        </HomeCarouselContainer>

        {/* SUBSCRIBE SECTION  */}

        <HomeSubscribeSection>
          <HomeSubscribeSectionText>
            ¡Suscríbete a nuestra newsletter y estate al tanto de todas nuestras
            novedades!
          </HomeSubscribeSectionText>
          <HomeSubscribeSectionField>
            <Mailchimp
              action={mailchimpUrl}
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
          </HomeSubscribeSectionField>
        </HomeSubscribeSection>

        <HomeSocialSection>
          <h3>¿Te gusta Doiche Living?</h3>
          <HomeSocialSectionContainer>
            <HomeSocialSectionItemContainer
              src={instagramSrc}
              alt=""
              small={"Síguenos en Instagram"}
            />
            <HomeSocialSectionItemContainer
              src={mailSrc}
              alt=""
              small={"Contacta con nosotros"}
            />
            <HomeSocialSectionItemContainer
              src={facebookSrc}
              alt=""
              small={"Síguenos en Instagram"}
            />
            <HomeSocialSectionItemContainer
              src={shareSrc}
              alt=""
              small={"Comparte la aplicación"}
            />
          </HomeSocialSectionContainer>
        </HomeSocialSection>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
