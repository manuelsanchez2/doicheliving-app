import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import logo2Src from "../../assets/icons/doicheliving-logo2.png";
import returnSrc from "../../assets/icons/arrow.svg";
import FullLoginRegisterContainer from "../../components/FullLoginRegisterContainer";
import SignupForm from "../../components/SignupForm";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import MainFlex from "../../components/MainFlex";
import LoginFormContainer from "../../components/LoginFormContainer";
import LoginFormInputWrapper from "../../components/LoginFormInputWrapper";

const Login = () => {
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
        <LoginFormContainer>
          <img src={logo2Src} alt="doicheliving logo" />
          <h2>INICIAR SESIÓN</h2>
          <SignupForm>
            <LoginFormInputWrapper>
              <label>Email</label>
              <input type="email" id="email" name="email" />
            </LoginFormInputWrapper>
            <LoginFormInputWrapper>
              <label>Contraseña</label>
              <input type="password" id="password" name="password" />
            </LoginFormInputWrapper>
            <input type="submit" value="ACCEDER A LA CUENTA" />
          </SignupForm>

          <small>
            ¿No tienes una cuenta? Haz click{` `}
            <Link to="/register">
              <strong>aquí</strong>
            </Link>
            {` `}para crear una en cuestión de segundos.
          </small>
        </LoginFormContainer>
      </MainFlex>
      <Footer />
    </FullLoginRegisterContainer>
  );
};

export default Login;
