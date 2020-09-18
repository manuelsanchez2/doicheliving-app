import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import homeSrc from "../../assets/icons/footer-home.svg";
import mapSrc from "../../assets/icons/footer-map.svg";
import searchSrc from "../../assets/icons/footer-search.svg";
import profileSrc from "../../assets/icons/footer-profile.svg";

const ImageFooter = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 12px 10px;
  padding-bottom: 2.5px;
`;

const StyledFooter = styled.nav`
  box-shadow: var(--shadow-up);
  max-height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-white);
  border-radius: 10px 10px 0px 0px;
  border-top: 1.5px solid var(--color-darkgrayborder);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/home">
        <ImageFooter src={homeSrc} alt="Home" />
      </Link>
      <Link to="/map">
        <ImageFooter src={mapSrc} alt="Map" />
      </Link>
      <Link to="/search">
        <ImageFooter src={searchSrc} alt="Search Icon" />
      </Link>
      <Link to="/login">
        <ImageFooter src={profileSrc} alt="Profile icon" />
      </Link>
    </StyledFooter>
  );
};

Footer.propTypes = {
  children: PropTypes.array,
};

export default Footer;
