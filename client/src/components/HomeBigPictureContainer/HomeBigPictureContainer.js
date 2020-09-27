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

  a > img {
    object-fit: cover;
    border-radius: 20px;
    width: 8.5rem;
    height: 12.5rem;
    box-shadow: 0.5px 0px 5px 0px rgba(0, 0, 0, 0.01);
  }

  a > small {
    margin-top: 0.8rem;
    line-height: 1.1rem;
  }
`;

const HomeBigPictureContainer = ({ src, alt, children, id, imageTitle }) => {
  return (
    <Container>
      <Link to={`/search/articles/${id}`}>
        <img src={src} alt={alt} />
        <small>{imageTitle}</small>
      </Link>
    </Container>
  );
};

HomeBigPictureContainer.propTypes = {
  children: PropTypes.node,
  to: PropTypes.any,
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
  imageTitle: PropTypes.string,
};

export default HomeBigPictureContainer;
