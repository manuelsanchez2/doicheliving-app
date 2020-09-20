import styled from "@emotion/styled";
import PropTypes from "prop-types";

const MainMap = styled.main`
  height: 60%;
  flex: 1;
  overflow: hidden;
  position: relative;
`;

export default MainMap;

MainMap.propTypes = {
  children: PropTypes.node,
};
