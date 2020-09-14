import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import doichelivingSrc from "../../assets/images/doicheliving-logo.png";
import profileSrc from "../../assets/images/header-profile.svg";
import Hamburger from "./Hamburger";

const ImageHeader = styled.img`
  height: 2rem;
  width: 2rem;
  margin: 15px 5px;
`;

const StyledHeader = styled.header`
  box-shadow: var(--shadow-down);
  max-height: 20%;
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 10px 10px;
  border-bottom: 1.5px solid var(--color-darkgrayborder);
  background-color: var(--color-white);

  div:last-child {
    margin-right: 25px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Hamburger />
      <div>
        <ImageHeader src={doichelivingSrc} alt="" />
      </div>
      <div>
        <ImageHeader src={profileSrc} alt="" />
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {
  children: PropTypes.array,
};

export default Header;
