import React from "react";
import styled from "@emotion/styled";
import favoriteIcon from "../../assets/icons/favorite-icon.svg";
import PropTypes from "prop-types";

const Button = styled.button`
  border: 1px solid var(--color-dark-border);
  background: var(--color-transparent);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 1.5rem;
    filter: ${(props) => (props.inactive ? "grayscale(1)" : "none")};
  }
`;

const FavButton = ({ onClick, src, alt }) => {
  return (
    <Button onClick={onClick}>
      <img src={favoriteIcon} alt="favorite button" />
    </Button>
  );
};

FavButton.displayName = "FavButton";

FavButton.propTypes = {
  onClick: PropTypes.any,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default FavButton;
