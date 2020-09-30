import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import homeSrc from "../../assets/icons/footer-home.svg";
import mapSrc from "../../assets/icons/footer-map.svg";
import searchSrc from "../../assets/icons/footer-search.svg";
import profileSrc from "../../assets/icons/footer-profile.svg";

const FooterNav = styled.nav`
  box-shadow: var(--shadow-up);
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-white);
  border-radius: 10px 10px 0px 0px;
  border-top: 1.5px solid var(--color-dark-border);
`;

const ImageFooter = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 12px 10px;
  padding-bottom: 2.5px;
  opacity: ${({ active }) => (active ? "1" : "0.5")};
`;

const Footer = () => {
  const location = useLocation();
  return (
    <FooterNav>
      <Link to="/home">
        <ImageFooter
          src={homeSrc}
          alt="Home"
          active={location.pathname === "/home" || location.pathname === "/"}
        />
      </Link>
      <Link to="/map">
        <ImageFooter
          src={mapSrc}
          alt="Map"
          active={location.pathname === "/map"}
        />
      </Link>
      <Link to="/search">
        <ImageFooter
          src={searchSrc}
          alt="Search Icon"
          active={location.pathname === "/search"}
        />
      </Link>
      <Link to="/login">
        <ImageFooter
          src={profileSrc}
          alt="Profile icon"
          active={
            location.pathname === "/profile" || location.pathname === "/login"
          }
        />
      </Link>
    </FooterNav>
  );
};

Footer.propTypes = {
  children: PropTypes.array,
};

export default Footer;
