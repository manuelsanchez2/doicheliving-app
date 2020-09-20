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
import HomeSocialSectionContainer from "../../components/HomeSocialSectionContainer/HomeSocialSectionContainer";
import HomeSocialSectionItemContainer from "../../components/HomeSocialSectionItemContainer/HomeSocialSectionItemContainer";
import Main from "../../components/Main/Main";
import HomeSubscribeSection from "../../components/HomeSubscribeSection";
import HomeSubscribeSectionText from "../../components/HomeSubscribeSectionText";
import HomeSubscribeSectionField from "../../components/HomeSubscribeSectionField/HomeSubscribeSectionField";

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
      <Main>
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

        <HomeSubscribeSection>
          <HomeSubscribeSectionText>
            ¡Suscríbete a nuestra newsletter y estate al tanto de todas nuestras
            novedades!
          </HomeSubscribeSectionText>
          <HomeSubscribeSectionField>
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

export default Login;
