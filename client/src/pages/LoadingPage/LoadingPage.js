import React from "react";
import styled from "@emotion/styled";
import doichelivingSrc from "../../assets/icons/doicheliving-logo.png";

const LoadingScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  height: 100vh;
  h2 {
    font-family: var(--font-lato);
    font-style: italic;
    color: var(--color-white);
  }
  img {
    width: 10rem;
    border: 0.5px solid var(--color-white);
    border-radius: 50%;
    animation: spin 7s infinite linear;
    margin-bottom: 0.5rem;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function LoadingPage() {
  return (
    <LoadingScreenWrapper>
      <img src={doichelivingSrc} alt="Logo" />
      <h2>Cargando...</h2>
    </LoadingScreenWrapper>
  );
}

export default LoadingPage;
