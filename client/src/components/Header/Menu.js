import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/images/doicheliving-logo2.png";
import homeSrc from "../../assets/images/menu-home.svg";
import mapSrc from "../../assets/images/menu-map.svg";
import searchSrc from "../../assets/images/menu-search.svg";
import contactSrc from "../../assets/images/menu-contact.svg";
import questionSrc from "../../assets/images/menu-question.svg";
import logoDarkSrc from "../../assets/images/menu-logo.png";

const MenuItemList = styled.ul`
  list-style: none;
  display: flex;

  border-right: 1.5px solid var(--color-darkgrayborder);

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(-20%)" : "translateX(-130%)")};
  position: absolute;
  flex-flow: column nowrap;
  background-color: var(--color-yellow);

  top: -2vh;
  right: 0;
  height: 101vh;
  width: 85vw;
  padding-top: 5.5rem;
`;

const MenuImage = styled.img`
  align-self: center;
  width: 27vw;
  border: 2.5px solid var(--color-white);
  border-radius: 50%;
  margin-bottom: 2rem;

  :first-child {
    margin-right: 15px;
  }
`;

const MenuItem = styled.li`
  margin-top: 0.5rem;

  > a {
    display: flex;
    padding: 0.8rem 0rem;
    max-width: 70vw;
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
  width: 32px;
  height: 32px;
  margin-left: 6vw;
`;

const MenuItemtext = styled.span`
  padding-right: 10%;
  font-family: var(--font-lato);
  margin-left: 6vw;
`;

const Menu = ({ open }) => {
  return (
    <MenuItemList open={open}>
      <MenuImage src={logoSrc} alt="logo Doiche Living" />
      <MenuItem>
        <Link to="/">
          <MenuItemImage src={homeSrc} alt="Home" />
          <MenuItemtext>Inicio</MenuItemtext>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">
          <MenuItemImage src={mapSrc} alt="Home" />
          <MenuItemtext>Mapa de Alemania</MenuItemtext>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">
          <MenuItemImage src={searchSrc} alt="Home" />
          <MenuItemtext>Buscador de Artículos</MenuItemtext>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">
          <MenuItemImage src={questionSrc} alt="Home" />
          <MenuItemtext>Preguntas Frecuentes</MenuItemtext>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/">
          <MenuItemImage src={contactSrc} alt="Home" />
          <MenuItemtext>Contacta con nosotros</MenuItemtext>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">
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
