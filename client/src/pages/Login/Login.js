import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import logo2Src from "../../assets/images/doicheliving-logo2.png";

const StyledLoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background: var(--color-yellow);
`;

const Login = () => {
  return (
    <StyledLoginContainer>
      <Header />
      <div className="main--login">
        <div className="form__container">
          <img src={logo2Src} alt="doicheliving logo" />
          <h2>INICIAR SESIÓN</h2>
          <form>
            <div className="form__field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Inserta tu email aquí "
              />
            </div>
            <div className="form__field">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Inserta tu contraseña aquí "
              />
            </div>
            <div className="form__field">
              <input type="submit" value="INICIAR SESIÓN" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </StyledLoginContainer>
  );
};

export default Login;
