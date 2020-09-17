import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  background: var(--color-yellow);
`;

const StyledMapContainer = ({ children }) => {
  return <Container>{children}</Container>;
};
StyledMapContainer.propTypes = {
  children: PropTypes.node,
};

export default StyledMapContainer;
