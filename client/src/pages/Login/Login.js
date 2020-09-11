import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";

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
      <div className="main--login">HOLA</div>
      <Footer />
    </StyledLoginContainer>
  );
};

export default Login;
