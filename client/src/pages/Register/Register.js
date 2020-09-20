import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import logo2Src from "../../assets/icons/doicheliving-logo2.png";
import returnSrc from "../../assets/icons/arrow.svg";
import MainFlex from "../../components/MainFlex";
import SignupForm from "../../components/SignupForm";
import FullLoginRegisterContainer from "../../components/FullLoginRegisterContainer";
import SignupFormContainer from "../../components/SignupFormContainer/SignupFormContainer";
import SignupFormInputWrapper from "../../components/SignupFormInputWrapper/SignupFormInputWrapper";
import ReturnButton from "../../components/ReturnButton/ReturnButton";

const Register = () => {
  const history = useHistory();
  return (
    <FullLoginRegisterContainer>
      <Header />

      <MainFlex>
        <ReturnButton
          onClick={() => history.goBack()}
          src={returnSrc}
          alt={"returnbutton"}
        />
        <SignupFormContainer>
          <img src={logo2Src} alt="doicheliving logo" />
          <h2>OBTENER UNA CUENTA</h2>
          <SignupForm>
            <SignupFormInputWrapper>
              <label>Nombre</label>
              <input type="name" id="name" name="name" />
            </SignupFormInputWrapper>
            <SignupFormInputWrapper>
              <label>Email</label>
              <input type="email" id="email" name="email" />
            </SignupFormInputWrapper>
            <SignupFormInputWrapper>
              <label>Contraseña</label>
              <input type="password" id="password" name="password" />
            </SignupFormInputWrapper>
            <SignupFormInputWrapper>
              <label>Confirmar Contraseña</label>
              <input type="password" id="password" name="password" />
            </SignupFormInputWrapper>
            <input
              className="button__login"
              type="submit"
              value="REGISTRARME"
            />
          </SignupForm>

          <small>
            Volver a{` `}
            <Link to="/login">
              <strong>Iniciar Sesión</strong>.
            </Link>
          </small>
        </SignupFormContainer>
      </MainFlex>
      <Footer />
    </FullLoginRegisterContainer>
  );
};

export default Register;
