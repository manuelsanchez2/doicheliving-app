import React from "react";
import PropTypes from "prop-types";
import { Marker } from "react-map-gl";
import mapMarkerYellow from "../../assets/icons/map-marker-yellow.svg";
import mapMarkerRed from "../../assets/icons/map-marker-red.svg";
import spotSrc from "../../assets/images/spot.jpg";

import SpotPopupContainer from "../../components/SpotPopupContainer";
import styled from "@emotion/styled";

const SpotPopUpCloseButton = styled.button`
  background: red;
  border: 0;
  width: 21px;
  color: white;
  height: 21px;
  position: absolute;
  top: 4px;
  right: 4px;
  border-radius: 50px;
`;

const SpotUserContainer = styled.div`
  display: flex;

  .image__user__container {
    position: absolute;
    top: 16px;
    right: 37px;
    width: auto;
    height: 3rem;
  }
`;

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
            src={spot.address ? mapMarkerYellow : mapMarkerRed}
            alt="map marker"
          />
        </div>
      </Marker>
      {popup && (
        <SpotPopupContainer>
          <h3>{spot.title}</h3>
          <SpotPopUpCloseButton onClick={onClose}>X</SpotPopUpCloseButton>
          {spot.address ? (
            <>
              <div>
                <p>{spot.description}</p>
                <small>{spot.address}</small>
                {spot.addInfo && (
                  <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: spot.addInfo }}
                  />
                )}
              </div>
              {spot.image && <img src={spot.image} alt={spot.title} />}
            </>
          ) : (
            <SpotUserContainer>
              <p>{spot.description}</p>
              <img
                className="image__user__container"
                src={spotSrc}
                alt="user spot"
              />
            </SpotUserContainer>
          )}
        </SpotPopupContainer>
      )}
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
