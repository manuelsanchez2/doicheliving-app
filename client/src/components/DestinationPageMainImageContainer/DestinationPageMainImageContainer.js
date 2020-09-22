import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import ReturnButton from "../ReturnButton";
import returnSrc from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  background: white;
  img:nth-child(2) {
    width: 100%;
    height: 30%;
    object-fit: cover;
    border-radius: 10px;
    border-bottom: 0.2px solid var(--color-dark-border);
    box-shadow: 0.5px 0px 5px 0px rgba(0, 0, 0, 0.01);
  }
  button:first-of-type {
    position: absolute;
    top: 0.5%;
    left: 3%;
    z-index: 30;
    background: var(--color-primary);
  }
`;

const ArticlePageMainImageContainer = ({ src, alt, children }) => {
  return (
    <Container>
      <ReturnButton src={returnSrc} alt="return button" />
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
