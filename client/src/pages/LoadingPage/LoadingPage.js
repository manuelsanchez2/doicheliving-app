import React, { useRef } from "react";
import styled from "@emotion/styled";
import introSrc from "../../assets/intro/intro.mp4";
import doichelivingSrc from "../../assets/icons/doicheliving-logo.png";

const LoadingScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffd300;
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
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.8;
  };

  return (
    <LoadingScreenWrapper>
      <video
        ref={videoRef}
        width="320"
        height="240"
        onCanPlay={() => setPlayBack()}
        autoPlay
        muted
      >
        <source src={introSrc} type="video/mp4" />
        <img src={doichelivingSrc} alt="Logo" />
        <h2>Cargando...</h2>
      </video>
    </LoadingScreenWrapper>
  );
}

export default LoadingPage;
