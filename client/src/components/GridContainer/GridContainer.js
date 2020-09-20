import styled from "@emotion/styled";
import PropTypes from "prop-types";

const GridContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

GridContainer.propTypes = {
  children: PropTypes.node,
};

export default GridContainer;
