import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

const Main = styled.main`
  height: 60%;
  flex: 1;
  overflow: hidden;
  position: relative;
`;

const MapMain = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MapMain;

MapMain.propTypes = {
  children: PropTypes.node,
};
