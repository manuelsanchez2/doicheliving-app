import styled from "@emotion/styled";
import PropTypes from "prop-types";

const MainFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 1em 0 1em;
  position: relative;
`;

MainFlex.propTypes = {
  children: PropTypes.node,
};

export default MainFlex;
