import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import logo2Src from "../../assets/icons/doicheliving-logo2.png";
import returnSrc from "../../assets/icons/arrow.svg";

const StyledRegisterContainer = styled.div`
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

const Register = () => {
  const history = useHistory();
  return (
    <StyledRegisterContainer>
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
            <h2>OBTENER UNA CUENTA</h2>
            <form>
              <div className="form__field">
                <label htmlFor="name">Nombre</label>
                <input type="name" id="name" name="name" />
              </div>
              <div className="form__field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form__field">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className="form__field">
                <label htmlFor="password">Confirmar Contraseña</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className="form__field">
                <input
                  className="button__login"
                  type="submit"
                  value="REGISTRARME"
                />
              </div>
            </form>
            <div className="form__text">
              <small>
                Volver a{` `}
                <Link to="/login">
                  <strong>Iniciar Sesión</strong>.
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </StyledRegisterContainer>
  );
};

export default Register;
