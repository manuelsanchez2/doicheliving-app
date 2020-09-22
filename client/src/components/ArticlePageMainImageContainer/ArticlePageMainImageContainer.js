import React from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import ReturnButton from "../ReturnButton/ReturnButton";
import returnSrc from "../../assets/icons/arrow-contrast.svg";
import FavButton from "../FavButton/FavButton";

const Container = styled.div`
  position: relative;
  background: white;

  img:nth-child(2) {
    width: 100%;
    height: 13.5rem;
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
  button:last-of-type {
    position: absolute;
    top: 85%;
    left: 80%;
    z-index: 30;
  }

  button:last-of-type img {
    width: 1.5rem;
    filter: ${(props) => (props.inactive ? "grayscale(1)" : "none")};
  }
`;

const ArticlePageMainImageContainer = ({ src, alt, children, inactive }) => {
  const history = useHistory();
  return (
    <Container>
      <ReturnButton
        onClick={() => history.goBack()}
        src={returnSrc}
        alt="return button"
      />
      <img src={src} alt={alt} />
      <FavButton onClick={() => !inactive} />
    </Container>
  );
};

ArticlePageMainImageContainer.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  inactive: PropTypes.bool,
};

export default ArticlePageMainImageContainer;
