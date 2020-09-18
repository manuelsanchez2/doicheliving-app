import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledMapContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  background: var(--color-yellow);
`;

StyledMapContainer.propTypes = {
  children: PropTypes.node,
};

export default StyledMapContainer;
