import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import homeSrc from "../../assets/images/footer-home.svg";
import mapSrc from "../../assets/images/footer-map.svg";
import searchSrc from "../../assets/images/footer-search.svg";
import profileSrc from "../../assets/images/footer-profile.svg";

const StyledFooter = styled.nav`
  box-shadow: var(--shadow-up);
  max-height: 15%;
  display: flex;
  justify-content: space-around;
  background-color: var(--color-white);
  border-radius: 10px 10px 0px 0px;
  border-top: 1px solid var(--color-grayborder);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/home">
        <img src={homeSrc} alt="Home" />
      </Link>
      <Link to="/">
        <img src={mapSrc} alt="Map" />
      </Link>
      <Link to="/">
        <img src={searchSrc} alt="Search Icon" />
      </Link>
      <Link to="/login">
        <img src={profileSrc} alt="Profile icon" />
      </Link>
    </StyledFooter>
  );
};

Footer.propTypes = {
  children: PropTypes.array,
};

export default Footer;
