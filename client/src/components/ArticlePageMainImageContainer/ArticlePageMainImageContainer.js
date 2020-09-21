import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Container = styled.div`
  position: relative;
  background: white;

  img {
    width: 100%;
    height: 20%;
    object-fit: cover;
    border-radius: 10px;

    border-bottom: 0.2px solid var(--color-dark-border);
    box-shadow: 0.5px 0px 5px 0px rgba(0, 0, 0, 0.01);
  }
`;

const ArticlePageMainImageContainer = ({ src, alt, children }) => {
  return (
    <Container>
      <img src={src} alt={alt} />
    </Container>
  );
};

ArticlePageMainImageContainer.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ArticlePageMainImageContainer;
