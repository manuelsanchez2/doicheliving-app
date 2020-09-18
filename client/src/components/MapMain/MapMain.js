import styled from "@emotion/styled";
import PropTypes from "prop-types";

const MapMain = styled.main`
  height: 60%;
  flex: 1;
  overflow: hidden;
  position: relative;
`;

export default MapMain;

MapMain.propTypes = {
  children: PropTypes.node,
};
