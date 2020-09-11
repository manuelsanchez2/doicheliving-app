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
  align-items: center;
  background-color: var(--color-white);
  border-radius: 10px 10px 0px 0px;
  border-top: 1.5px solid var(--color-darkgrayborder);

  img {
    width: 2rem;
    height: 2rem;
    margin: 12px 10px;
    padding-bottom: 2.5px;
  }
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
