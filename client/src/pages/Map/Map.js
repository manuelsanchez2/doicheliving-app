import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { listSpots } from "../../api/spots";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import mapMarkerRed from "../../assets/icons/map-marker-red.svg";
import SpotEntryForm from "../../components/SpotEntryForm/SpotEntryForm";
import MainMap from "../../components/MainMap/MainMap";
import StyledMapContainer from "../../components/StyledMapContainer";
import SpotEntryFormContainer from "../../components/SpotEntryFormContainer";
import Spot from "../../components/Spot";

const Map = () => {
  const [spots, setSpots] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addSpot, setAddSpot] = useState(null);
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 51.9565,
    longitude: 10.2755,
    zoom: 4.5,
  });
  const mapboxApiAccessToken = process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN;

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
    // eslint-disable-next-line
  }, []);

  const getSpots = async () => {
    const spots = await listSpots();
    setSpots(spots);
  };

  useEffect(() => {
    getSpots();
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
      <MainMap>
        <ReactMapGL
          ref={mapRef}
          {...viewport}
          mapboxApiAccessToken={mapboxApiAccessToken}
          mapStyle="mapbox://styles/manusanchez2/ckf3tjjnc10a619s7rnb6iqfa"
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          onDblClick={showAddMarkerPopup}
        >
          {/* Display of the existing spots and their popups */}

          {spots.map((spot) => (
            <Spot
              key={spot.id}
              spot={spot}
              popup={showPopup[spot.id]}
              onMarkerClick={() =>
                setShowPopup({
                  [spot.id]: true,
                })
              }
              onClose={() =>
                setShowPopup({
                  [spot.id]: false,
                })
              }
            />
          ))}

          {/* Add the search bar  */}

          <Geocoder
            mapRef={mapRef}
            marker={false}
            limit={3}
            minLength={4}
            placeholder={"Introduce tu destino"}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={mapboxApiAccessToken}
            position="top-right"
            language="es, en"
            countries="de"
          />

          {/* Add the possibility of adding a new spot on the exact location of the screen */}

          {addSpot ? (
            <>
              <Marker
                key={addSpot.id}
                latitude={addSpot.latitude}
                longitude={addSpot.longitude}
                offsetLeft={-12}
                offsetTop={-24}
              >
                <div
                  onClick={() =>
                    setShowPopup({
                      [addSpot.id]: true,
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
                dynamicPosition={true}
                anchor="top"
                onClose={() => setAddSpot(null)}
              >
                <SpotEntryFormContainer>
                  <SpotEntryForm
                    onClose={() => {
                      setAddSpot(null);
                      getSpots();
                    }}
                    location={addSpot}
                  />
                </SpotEntryFormContainer>
              </Popup>
            </>
          ) : null}
        </ReactMapGL>
      </MainMap>
      <Footer />
    </StyledMapContainer>
  );
};

export default Map;
