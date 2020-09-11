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
        <div className="form-container">
          <img src={logo2Src} alt="doicheliving logo" />
          <h2>INICIAR SESIÓN</h2>
        </div>
      </div>
      <Footer />
    </StyledLoginContainer>
  );
};

export default Login;
