import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { listSpots } from "../../api/spots";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import mapMarkerYellow from "../../assets/icons/map-marker-yellow.svg";
import mapMarkerRed from "../../assets/icons/map-marker-red.svg";
import SpotEntryForm from "../../components/SpotEntryForm/SpotEntryForm";
import MapMain from "../../components/MapMain/MapMain";

const SpotEntryFormContainer = styled.div`
  max-width: 350px;
  padding: 0.5rem;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid var(--color-darkgrayborder);
  box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);
`;

const SpotPopupContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: inherit;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid var(--color-darkgrayborder);
  box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);
  z-index: 20;

  h3 {
    font-size: 0.7rem;
    font-family: var(--font-lato);
    font-weight: bold;
    width: 90%;
    height: 10%;
  }

  button {
    width: 10%;
    height: 10%;
    border-radius: 50px;
  }

  div {
    width: 65%;
  }

  img {
    max-height: 40%;
    max-width: 35%;
    border-radius: 5px;
    border: 1px solid var(--color-grayborder);
    box-shadow: 0.5px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
  small {
    font-size: 0.6rem;
    font-style: italic;
  }
  p {
    font-size: 0.6rem;
    font-family: var(--font-lato);
    width: 65%;
  }
`;

const StyledMapContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  background: var(--color-yellow);
`;

const Map = () => {
  const [spots, setSpots] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addSpot, setAddSpot] = useState(null);
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 53.5574235,
    longitude: 9.9225019,
    zoom: 10.5,
  });

  // This code is used for the Geocoder

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback((newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides,
    });
  }, []);

  useEffect(() => {
    (async () => {
      const spots = await listSpots();
      setSpots(spots);
    })();
  }, []);

  const showAddMarkerPopup = (event) => {
    const [longitude, latitude] = event.lngLat;
    setAddSpot({
      latitude,
      longitude,
    });
  };

  return (
    <StyledMapContainer>
      <Header />
      <MapMain>
        <ReactMapGL
          ref={mapRef}
          {...viewport}
          mapboxApiAccessToken={
            "pk.eyJ1IjoibWFudXNhbmNoZXoyIiwiYSI6ImNrZDAyMGF6ajBwOGEzMW91YWhpaXBrd3IifQ.DxIOHXiZw3-rvAn5yC8QYw"
          }
          //   mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/manusanchez2/ckf3tjjnc10a619s7rnb6iqfa"
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          onDblClick={showAddMarkerPopup}
        >
          {/* Display of the existing spots and their popups */}

          {spots.map((spot) => (
            <div key={spot._id}>
              <Marker
                latitude={spot.latitude}
                longitude={spot.longitude}
                offsetLeft={-12}
                offsetTop={-24}
              >
                <div
                  onClick={() =>
                    setShowPopup({
                      [spot._id]: true,
                    })
                  }
                >
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                    }}
                    src={mapMarkerYellow}
                    alt="map marker"
                  />
                </div>
              </Marker>
              {showPopup[spot._id] ? (
                <SpotPopupContainer>
                  <h3>{spot.title}</h3>
                  <button>X</button>
                  <div>
                    <p>{spot.description}</p>
                    <small>{spot.address}</small>
                    {/* {spot.addInfo && (
                      <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: spot.addInfo }}
                      />
                    )} */}
                    {spot.addInfo && <p>{spot.addInfo}</p>}
                  </div>

                  {spot.image && <img src={spot.image} alt={spot.title} />}
                </SpotPopupContainer>
              ) : null}
            </div>
          ))}

          {/* Add the search bar  */}

          <Geocoder
            mapRef={mapRef}
            marker={false}
            limit={3}
            minLength={4}
            placeholder={"Introduce tu destino"}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken="pk.eyJ1IjoibWFudXNhbmNoZXoyIiwiYSI6ImNrZDAyMGF6ajBwOGEzMW91YWhpaXBrd3IifQ.DxIOHXiZw3-rvAn5yC8QYw"
            position="top-right"
            language="es, en"
            countries="de"
          />

          {/* Add the possibility of adding a new spot on the exact location of the screen */}

          {addSpot ? (
            <>
              <Marker
                key={addSpot._id}
                latitude={addSpot.latitude}
                longitude={addSpot.longitude}
                offsetLeft={-12}
                offsetTop={-24}
              >
                <div
                  onClick={() =>
                    setShowPopup({
                      [addSpot._id]: true,
                    })
                  }
                >
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                    }}
                    src={mapMarkerRed}
                    alt="map marker"
                  />
                </div>
              </Marker>
              <Popup
                latitude={addSpot.latitude}
                longitude={addSpot.longitude}
                closeButton={true}
                closeOnClick={false}
                anchor="top"
                onClose={() => setAddSpot(null)}
              >
                <SpotEntryFormContainer>
                  <SpotEntryForm />
                </SpotEntryFormContainer>
              </Popup>
            </>
          ) : null}
        </ReactMapGL>
      </MapMain>
      <Footer />
    </StyledMapContainer>
  );
};

export default Map;
