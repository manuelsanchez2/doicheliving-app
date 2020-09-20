import React, { useState } from "react";
import Menu from "./Menu";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Container = styled.div`
  margin-top: 15px;
  margin-left: 25px;
`;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 1000;
  position: ${({ open }) => (open ? "fixed" : "static")};
  transition: all 0.5s linear;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "red" : "#707070")};

    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-of-type(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-of-type(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-of-type(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Menu open={open} />
    </Container>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool,
};
