import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

const Container = styled.div`
  margin-left: 0.6rem;
  line-height: 0.65rem;

  h4 {
    font-size: 0.75rem;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.65rem;
    margin: 0;
    font-style: italic;
  }
`;

const SearchResultListItemText = ({ title, description }) => {
  return (
    <Container>
      <h4>{title}</h4>
      <span>{description}</span>
    </Container>
  );
};

SearchResultListItemText.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SearchResultListItemText;
