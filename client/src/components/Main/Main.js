import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Main = styled.div`
  padding: 0 1em 0 1em;
`;

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;