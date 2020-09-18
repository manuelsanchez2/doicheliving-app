import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Main = styled.div`
  flex: 1;
  padding: 0 1em 0 1em;
  min-height: 81vh;
`;

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
