import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import pictureTest from "../../pages/destinations/assets/hamburg.jpeg";

const ImageMapContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  justify-content: space-around;

  img {
    width: 45%;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }
`;

const Container = styled.div`
  padding: 0 1em 0 1em;
  display: flex;
  flex-direction: column;

  h2,
  h3 {
    text-align: center;
    margin: 0.5rem 0;
  }

  h3 {
    font-weight: normal;
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.6rem;
    line-height: 1rem;
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
    <Container>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{subtitle}</h3>
      <ImageMapContainer>
        <img src={pictureTest} alt={alt} />
        <img src={pictureTest} alt={alt} />
        <img src={pictureTest} alt={alt} />
        <img src={pictureTest} alt={alt} />
        <img src={pictureTest} alt={alt} />
        <img src={pictureTest} alt={alt} />
        <img src={pictureTest} alt={alt} />
        <img src={pictureTest} alt={alt} />
      </ImageMapContainer>
    </Container>
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
