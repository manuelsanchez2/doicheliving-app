import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import doichelivingSrc from "../../assets/icons/doicheliving-logo.png";
import profileSrc from "../../assets/icons/header-profile.svg";
import Hamburger from "./Hamburger";

const ImageHeader = styled.img`
  height: 2rem;
  width: 2rem;
  margin: 15px 5px;
`;

const StyledHeader = styled.header`
  box-shadow: var(--shadow-down);
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 10px 10px;
  border-bottom: 1.5px solid var(--color-darkgrayborder);
  background-color: var(--color-white);

  & > :last-child {
    margin-right: 25px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Hamburger />

      <ImageHeader src={doichelivingSrc} alt="" />

      <ImageHeader src={profileSrc} alt="" />
    </StyledHeader>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
