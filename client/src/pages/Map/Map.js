import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import { useHistory } from "react-router-dom";
import { listSpots } from "../../api/spots";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import mapMarkerYellow from "../../assets/icons/map-marker-yellow.svg";
import mapMarkerRed from "../../assets/icons/map-marker-red.svg";
// import returnSrc from "../../assets/icons/arrow.svg";

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
    height: "88.5vh",
    width: "2000",
    latitude: 53.5574235,
    longitude: 9.9225019,
    zoom: 11,
  });

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
      {/* <button onClick={() => history.goBack()}>
        <img src={returnSrc} alt="return button" />
      </button> */}

      <div className="main--map">
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
          {spots.map((spot) => (
            <>
              <Marker
                key={spot._id}
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
                <Popup
                  latitude={spot.latitude}
                  longitude={spot.longitude}
                  closeButton={false}
                  closeOnClick={true}
                  dynamicPosition={true}
                  onClose={() => setShowPopup({})}
                  anchor="top"
                >
                  <div className="popup">
                    <h3>{spot.title}</h3>
                    <p>{spot.description}</p>
                  </div>
                </Popup>
              ) : null}
            </>
          ))}

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
                closeButton={false}
                closeOnClick={true}
                dynamicPosition={true}
                anchor="top"
                onClose={() => setAddSpot(null)}
              >
                <h3>Add your shit</h3>
              </Popup>
            </>
          ) : null}
        </ReactMapGL>
      </div>
      <Footer />
    </StyledMapContainer>
  );
};

export default Map;
