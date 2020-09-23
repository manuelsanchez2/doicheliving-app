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

  img {
    width: 45%;
    height: 5.8rem;
    margin-bottom: 1.2rem;
    border-radius: 0.5rem;
  }
`;

const DestinationPageMainContent = ({
  title,
  description,
  subtitle,
  src,
  alt,
  children,
}) => {
  return (
    <DestinationPageContainer>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{subtitle}</h3>
      <DestinationImageMapContainer>
        <img src={src} alt={alt} />
        <img src={src} alt={alt} />
        <img src={src} alt={alt} />
        <img src={src} alt={alt} />
        <img src={src} alt={alt} />
        <img src={src} alt={alt} />
        <img src={src} alt={alt} />
        <img src={src} alt={alt} />
      </DestinationImageMapContainer>
    </DestinationPageContainer>
  );
};

DestinationPageMainContent.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  subtitle: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default DestinationPageMainContent;
