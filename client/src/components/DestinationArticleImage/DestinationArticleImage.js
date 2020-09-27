import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;

  a {
    text-decoration: none;
    margin: 0.8rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a > img {
    height: 5rem;
    border-radius: 0.5rem;
    width: 95%;
    margin-bottom: 0.7rem;
  }

  a > small {
    color: var(--color-secondary);
  }
`;

const DestinationArticleImage = ({ src, alt, id, imageTitle }) => {
  return (
    <Container>
      <Link to={`/search/articles/${id}`}>
        <img src={src} alt={alt} />
        <small>{imageTitle}</small>
      </Link>
    </Container>
  );
};

DestinationArticleImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
  imageTitle: PropTypes.string,
};

export default DestinationArticleImage;
