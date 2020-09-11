import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import logo2Src from "../../assets/images/doicheliving-logo2.png";
import returnSrc from "../../assets/images/arrow.svg";

const StyledLoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  background: var(--color-yellow);

  img {
    max-height: 5rem;
    max-width: 5rem;
  }

  h2 {
    text-align: center;
    margin-bottom: 17px;
    margin-top: 12px;
  }

  button {
    background: var(--color-white);
    border: 1px solid var(--color-darkgrayborder);
    border-radius: 50px;
    width: 48px;
    height: 48px;
    margin: 10px 0 0 10px;
  }
`;

const Login = () => {
  const history = useHistory();
  return (
    <StyledLoginContainer>
      <Header />
      <button onClick={() => history.goBack()}>
        <img src={returnSrc} alt="return button" />
      </button>

      <div className="main--login">
        <div className="form__high__container">
          <div className="form__width__container">
            <div className="form__image">
              <img src={logo2Src} alt="doicheliving logo" />
            </div>
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
                <input
                  className="button__login"
                  type="submit"
                  value="ACCEDER A LA CUENTA"
                />
              </div>
            </form>
            <div className="form__text">
              <small>
                ¿No tienes una cuenta? Haz click <strong>aquí</strong> para
                crear una en cuestión de segundos.
              </small>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </StyledLoginContainer>
  );
};

export default Login;
