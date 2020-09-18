import styled from "@emotion/styled";
import PropTypes from "prop-types";

const MainFlex = styled.div`
  flex: 1;
  padding: 0 1em 0 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

MainFlex.propTypes = {
  children: PropTypes.node,
};

export default MainFlex;
