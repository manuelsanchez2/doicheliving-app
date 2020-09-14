import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styled from "@emotion/styled";
import PictureTest from "../../assets/images/picture-test-1.jpg";
import PictureTest2 from "../../assets/images/picture-test-2.jpg";
import PictureTest3 from "../../assets/images/picture-test-3.jpg";
import { Link } from "react-router-dom";

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
      <div className="main">
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
        <h3>Suscribete con nosotros</h3>
        <p>Si quieres formar parte del equipo de Doiche Living..</p>
        <h3>Iconos</h3>
        <p>Aqui vamos a tener unos supericonos</p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
