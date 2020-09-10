import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import doichelivingSrc from "../../assets/images/doicheliving-logo.png";

const StyledHeader = styled.header`
  box-shadow: var(--shadow-down);
  max-height: 15%;
  display: flex;
  justify-content: space-around;
  border-radius: 0px 0px 10px 10px;
  border: 1px solid var(--color-grayborder);
  background-color: var(--color-white);
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={doichelivingSrc} alt="" />
      <img src={doichelivingSrc} alt="" />
      <img src={doichelivingSrc} alt="" />
    </StyledHeader>
  );
};

Header.propTypes = {
  children: PropTypes.array,
};

export default Header;
