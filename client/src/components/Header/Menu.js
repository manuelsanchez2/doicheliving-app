import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/icons/doicheliving-logo2.png";
import homeSrc from "../../assets/icons/menu-home.svg";
import mapSrc from "../../assets/icons/menu-map.svg";
import searchSrc from "../../assets/icons/menu-search.svg";
import contactSrc from "../../assets/icons/menu-contact.svg";
import questionSrc from "../../assets/icons/menu-question.svg";
import logoDarkSrc from "../../assets/icons/menu-logo.png";
import MenuItem from "./MenuItem";
import MenuItemImage from "./MenuItemImage";
import MenuItemText from "./MenuItemText";
import MenuMainImage from "./MenuMainImage";
import MenuItemList from "./MenuItemList";

const Menu = ({ open }) => {
  return (
    <MenuItemList open={open}>
      <MenuMainImage src={logoSrc} alt="logo Doiche Living" />
      <MenuItem>
        <Link to="/home">
          <MenuItemImage src={homeSrc} alt="Home" />
          <MenuItemText>Inicio</MenuItemText>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/map">
          <MenuItemImage src={mapSrc} alt="Map" />
          <MenuItemText>Mapa de Alemania</MenuItemText>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/search">
          <MenuItemImage src={searchSrc} alt="Search" />
          <MenuItemText>Buscador de Artículos</MenuItemText>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/questions">
          <MenuItemImage src={questionSrc} alt="Home" />
          <MenuItemText>Preguntas Frecuentes</MenuItemText>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/contact">
          <MenuItemImage src={contactSrc} alt="Home" />
          <MenuItemText>Contacta con nosotros</MenuItemText>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/about">
          <MenuItemImage src={logoDarkSrc} alt="Home" />
          <MenuItemText>Sobre Doiche Living</MenuItemText>
        </Link>
      </MenuItem>
    </MenuItemList>
  );
};

export default Menu;

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
};
