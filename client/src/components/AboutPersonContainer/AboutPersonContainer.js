import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  img {
    width: 90px;
    height: 90px;
  }

  div {
    margin-left: 0.2rem;
    line-height: 0.9rem;
  }

  div p {
    font-weight: bold;
    font-size: 0.8rem;
  }

  div small {
    font-size: 0.8rem;
  }
`;

const AboutPersonContainer = ({ name, description, src, alt }) => {
  return (
    <Container>
      <img src={src} alt={alt} />
      <div>
        <p>{name}</p>
        <small>{description}</small>
      </div>
    </Container>
  );
};

AboutPersonContainer.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutPersonContainer;
