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
import MapMain from "../../components/MapMain/MapMain";
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
  // This code is used for the Geocoder. Instead of this I want to have a custom hook (useGeocoder)

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
          mapboxApiAccessToken={mapboxApiAccessToken}
          mapStyle="mapbox://styles/manusanchez2/ckf3tjjnc10a619s7rnb6iqfa"
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          onDblClick={showAddMarkerPopup}
        >
          {/* Display of the existing spots and their popups */}

          {spots.map((spot) => (
            <Spot
              key={spot._id}
              spot={spot}
              popup={showPopup[spot._id]}
              onMarkerClick={() =>
                setShowPopup({
                  [spot._id]: true,
                })
              }
              onClose={() =>
                setShowPopup({
                  [spot._id]: false,
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
                  <SpotEntryForm location={addSpot} />
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
