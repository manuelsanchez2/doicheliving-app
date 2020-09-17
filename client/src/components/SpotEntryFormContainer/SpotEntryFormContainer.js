import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

const Container = styled.div`
  max-width: 350px;
  padding: 0.5rem;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid var(--color-darkgrayborder);
  box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);
`;

const SpotEntryFormContainer = ({ children }) => {
  return <Container>{children}</Container>;
};
SpotEntryFormContainer.propTypes = {
  children: PropTypes.node,
};

export default SpotEntryFormContainer;
