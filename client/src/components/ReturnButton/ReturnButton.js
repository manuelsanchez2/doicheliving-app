import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Button = styled.button`
  background: var(--color-white);
  border: 1px solid var(--color-darkgrayborder);
  border-radius: 50px;
  width: 48px;
  height: 48px;
  margin: 10px 0 0 10px;

  & > img {
    width: 1.5em;
    margin-top: 4px;
  }
`;

function ReturnButton({ onClick, src, alt }) {
  return (
    <Button onClick={onClick}>
      <img src={src} alt={alt} />
    </Button>
  );
}

ReturnButton.propTypes = {
  onClick: PropTypes.any,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ReturnButton;
