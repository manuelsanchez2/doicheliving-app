import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/icons/doicheliving-logo2.png";
import homeSrc from "../../assets/icons/menu-home.svg";
import mapSrc from "../../assets/icons/menu-map.svg";
import searchSrc from "../../assets/icons/menu-search.svg";
import contactSrc from "../../assets/icons/menu-contact.svg";
import questionSrc from "../../assets/icons/menu-question.svg";
import logoDarkSrc from "../../assets/icons/menu-logo.png";

const MenuItemList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;

  border-right: 1.5px solid var(--color-darkgrayborder);

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(-20%)" : "translateX(-130%)")};
  position: absolute;
  flex-flow: column nowrap;
  background-color: var(--color-yellow);

  top: 0;
  right: 0;
  height: 100%;
  width: 85%;

  z-index: 50;
`;

const MenuImage = styled.img`
  width: 6rem;
  border: 2.5px solid var(--color-white);
  border-radius: 50%;
  margin-bottom: 1.5rem;
  margin-top: 5rem;
  align-self: center;

  :first-of-type {
    margin-right: 22px;
  }
`;

const MenuItem = styled.li`
  margin-top: 0.5rem;

  > a {
    display: flex;
    padding: 0.6rem 0rem;
    max-width: 90%;
    align-items: center;
    text-decoration: none;
    color: var(--color-black);
    border-radius: 10px;
    border: 1.5px solid var(--color-darkgrayborder);
    background-color: var(--color-white);
    box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);
  }
`;

const MenuItemImage = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-left: 0.5rem;
`;

const MenuItemtext = styled.span`
  padding-right: 10%;
  font-family: var(--font-lato);
  font-size: 0.7rem;
  margin-left: 6vw;
`;

const Menu = ({ open }) => {
  return (
    <MenuItemList open={open}>
      <MenuImage src={logoSrc} alt="logo Doiche Living" />
      <MenuItem>
        <Link to="/home">
          <MenuItemImage src={homeSrc} alt="Home" />
          <MenuItemtext>Inicio</MenuItemtext>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/map">
          <MenuItemImage src={mapSrc} alt="Map" />
          <MenuItemtext>Mapa de Alemania</MenuItemtext>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/search">
          <MenuItemImage src={searchSrc} alt="Search" />
          <MenuItemtext>Buscador de Artículos</MenuItemtext>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/questions">
          <MenuItemImage src={questionSrc} alt="Home" />
          <MenuItemtext>Preguntas Frecuentes</MenuItemtext>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/contact">
          <MenuItemImage src={contactSrc} alt="Home" />
          <MenuItemtext>Contacta con nosotros</MenuItemtext>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/about">
          <MenuItemImage src={logoDarkSrc} alt="Home" />
          <MenuItemtext>Sobre Doiche Living</MenuItemtext>
        </Link>
      </MenuItem>
    </MenuItemList>
  );
};

export default Menu;

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
};
