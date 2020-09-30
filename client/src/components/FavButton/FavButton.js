import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Button = styled.button`
  border: 0.5px solid var(--color-dark-border);
  background: var(--color-input);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1.5rem;
    fill: ${({ value }) =>
      value ? "var(--color-primary)" : "var(--color-light-border)"};
  }
`;

const FavButton = ({ onClick, src, alt }) => {
  const [checked, setChecked] = useState(false);
  function handleChange() {
    setChecked(!checked);
  }
  return (
    <Button value={checked} onClick={() => handleChange()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#ffce00"
        stroke="#484848"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-star"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
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
