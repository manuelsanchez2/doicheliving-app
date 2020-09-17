import React from "react";
import PropTypes from "prop-types";
import { Marker } from "react-map-gl";
import mapMarkerYellow from "../../assets/icons/map-marker-yellow.svg";
import SpotPopupContainer from "../../components/SpotPopupContainer";

const Spot = ({ spot, onMarkerClick, onClose, popup }) => {
  return (
    <div>
      <Marker
        latitude={spot.latitude}
        longitude={spot.longitude}
        offsetLeft={-12}
        offsetTop={-24}
      >
        <div onClick={onMarkerClick}>
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
      {popup ? (
        <SpotPopupContainer>
          <h3>{spot.title}</h3>
          <button onClick={onClose}>X</button>
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
  );
};

Spot.propTypes = {
  children: PropTypes.node,
  spot: PropTypes.object,
  onMarkerClick: PropTypes.func,
  onClose: PropTypes.func,
  popup: PropTypes.bool,
};

export default Spot;
