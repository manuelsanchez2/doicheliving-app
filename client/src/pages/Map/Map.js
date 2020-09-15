import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
// import { useHistory } from "react-router-dom";
import { listSpots } from "../../api/spots";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
// import returnSrc from "../../assets/icons/arrow.svg";

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
    z-index: 999;
  }
`;

const Map = () => {
  //   const history = useHistory();
  const [viewport, setViewport] = useState({
    height: "88.5vh",
    width: "2000",
    latitude: 53.5574235,
    longitude: 9.9225019,
    zoom: 11,
  });

  useEffect(() => {
    (async () => {
      const spots = await listSpots();
      console.log(spots);
    })();
  }, []);

  return (
    <StyledMapContainer>
      <Header />
      {/* <button onClick={() => history.goBack()}>
        <img src={returnSrc} alt="return button" />
      </button> */}

      <div className="main--map">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={
            "pk.eyJ1IjoibWFudXNhbmNoZXoyIiwiYSI6ImNrZDAyMGF6ajBwOGEzMW91YWhpaXBrd3IifQ.DxIOHXiZw3-rvAn5yC8QYw"
          }
          //   mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/manusanchez2/ckf3tjjnc10a619s7rnb6iqfa"
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
      </div>
      <Footer />
    </StyledMapContainer>
  );
};

export default Map;
