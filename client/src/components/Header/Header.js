import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import doichelivingSrc from "../../assets/images/doicheliving-logo.png";
import hamburgerSrc from "../../assets/images/header-hamburger.svg";
import profileSrc from "../../assets/images/header-profile.svg";

const StyledHeader = styled.header`
  box-shadow: var(--shadow-down);
  max-height: 15%;
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 10px 10px;
  border-bottom: 1.5px solid var(--color-darkgrayborder);
  background-color: var(--color-white);

  img {
    min-width: 30px;
    min-height: 35px;
    max-width: 35px;
    max-height: 35px;
    margin: 15px 10px;
  }

  div:first-child > img {
    margin-left: 25px;
    max-width: 30px;
  }

  div:nth-child(2) > img {
    max-width: 45px;
  }

  div:last-child > img {
    margin-right: 25px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={hamburgerSrc} alt="" />
      </div>
      <div>
        <img src={doichelivingSrc} alt="" />
      </div>
      <div>
        <img src={profileSrc} alt="" />
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {
  children: PropTypes.array,
};

export default Header;
