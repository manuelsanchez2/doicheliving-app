import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import returnSrc from "../../assets/icons/arrow.svg";

const StyledMapContainer = styled.div`
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

  button {
    background: var(--color-white);
    border: 1px solid var(--color-darkgrayborder);
    border-radius: 50px;
    width: 48px;
    height: 48px;
    margin: 10px 0 0 10px;
  }
`;

const Map = () => {
  const history = useHistory();
  return (
    <StyledMapContainer>
      <Header />
      <button onClick={() => history.goBack()}>
        <img src={returnSrc} alt="return button" />
      </button>

      <div className="main--map"></div>
      <Footer />
    </StyledMapContainer>
  );
};

export default Map;
