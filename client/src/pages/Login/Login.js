import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import logo2Src from "../../assets/icons/doicheliving-logo2.png";
import returnSrc from "../../assets/icons/arrow.svg";
import MainFlex from "../../components/MainFlex";
import FullLoginRegisterContainer from "../../components/FullLoginRegisterContainer";
import SignupForm from "../../components/SignupForm";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import SignupFormContainer from "../../components/SignupFormContainer/SignupFormContainer";
import SignupFormInputWrapper from "../../components/SignupFormInputWrapper/SignupFormInputWrapper";

const Login = () => {
  const history = useHistory();
  return (
    <FullLoginRegisterContainer>
      <Header />
      <ReturnButton
        onClick={() => history.goBack()}
        src={returnSrc}
        alt={"returnbutton"}
      />

      <MainFlex>
        <SignupFormContainer>
          <img src={logo2Src} alt="doicheliving logo" />
          <h2>INICIAR SESIÓN</h2>
          <SignupForm>
            <SignupFormInputWrapper>
              <label>Email</label>
              <input type="email" id="email" name="email" />
            </SignupFormInputWrapper>
            <SignupFormInputWrapper>
              <label>Contraseña</label>
              <input type="password" id="password" name="password" />
            </SignupFormInputWrapper>
            <input
              className="button__login"
              type="submit"
              value="ACCEDER A LA CUENTA"
            />
          </SignupForm>

          <small>
            ¿No tienes una cuenta? Haz click{` `}
            <Link to="/register">
              <strong>aquí</strong>
            </Link>
            {` `}para crear una en cuestión de segundos.
          </small>
        </SignupFormContainer>
      </MainFlex>
      <Footer />
    </FullLoginRegisterContainer>
  );
};

export default Login;
