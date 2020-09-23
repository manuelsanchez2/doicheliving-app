import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: white;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--color-secondary);
    padding-bottom: 0.2rem;
  }

  img {
    object-fit: cover;
    border-radius: 20px;
    width: 7rem;
    height: 5.5rem;
    box-shadow: 0.5px 0px 5px 0px rgba(0, 0, 0, 0.01);
  }

  small {
    margin-top: 0.8rem;
  }
`;

const HomeSmallPictureContainer = ({ to, src, alt, imageTitle, children }) => {
  return (
    <Container>
      <Link to={to}>
        <img src={src} alt={alt} />
        <small>{imageTitle}</small>
      </Link>
    </Container>
  );
};

HomeSmallPictureContainer.propTypes = {
  children: PropTypes.node,
  imageTitle: PropTypes.string,
  to: PropTypes.any,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default HomeSmallPictureContainer;
