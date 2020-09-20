import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledSearchSelector = styled.div`
  label {
    opacity: 0.6;
  }

  select {
    display: block;
    width: 100%;
    padding: 10px 8px;
    background-color: var(--color-grayinput);
    border-radius: 10px;
    background-color: var(--color-grayinput);
    margin-top: 0.3rem;
  }
`;

const SearchSelector = ({ children }) => {
  return <StyledSearchSelector>{children}</StyledSearchSelector>;
};

SearchSelector.propTypes = {
  children: PropTypes.node,
};

export default SearchSelector;
