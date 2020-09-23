import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import DestinationPageContainer from "../DestinationPageContainer/DestinationPageContainer";

const DestinationImageMapContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
  }

  img {
    height: 5rem;
    border-radius: 0.5rem;
    width: 95%;
  }

  small {
    margin: 0.7rem 0;
  }
`;

const DestinationPageMainContent = ({
  title,
  description,
  subtitle,
  src,
  alt,
  imageTitle,
  children,
}) => {
  return (
    <DestinationPageContainer>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{subtitle}</h3>
      <DestinationImageMapContainer>
        <div>
          <img src={src} alt={alt} />
          <small>{imageTitle}</small>
        </div>
        <div>
          <img src={src} alt={alt} />
          <small>{imageTitle}</small>
        </div>
        <div>
          <img src={src} alt={alt} />
          <small>{imageTitle}</small>
        </div>
        <div>
          <img src={src} alt={alt} />
          <small>{imageTitle}</small>
        </div>
        <div>
          <img src={src} alt={alt} />
          <small>{imageTitle}</small>
        </div>
        <div>
          <img src={src} alt={alt} />
          <small>{imageTitle}</small>
        </div>
      </DestinationImageMapContainer>
    </DestinationPageContainer>
  );
};

DestinationPageMainContent.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  subtitle: PropTypes.string,
  imageTitle: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default DestinationPageMainContent;
