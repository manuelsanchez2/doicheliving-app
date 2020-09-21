import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: white;

  img {
    object-fit: cover;
    border-radius: 20px;
    width: 7rem;
    height: 5.5rem;
    border: 0.2px solid var(--color-dark-border);
    box-shadow: 0.5px 0px 5px 0px rgba(0, 0, 0, 0.01);
  }
`;

const HomeSmallPictureContainer = ({ to, src, alt, children }) => {
  return (
    <Container>
      <Link to={to}>
        <img src={src} alt={alt} />
      </Link>
    </Container>
  );
};

HomeSmallPictureContainer.propTypes = {
  children: PropTypes.node,
  to: PropTypes.any,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default HomeSmallPictureContainer;
