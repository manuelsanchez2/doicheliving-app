import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  a {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    text-decoration: none;
    color: var(--color-secondary);
  }
`;

function SearchResultListItem({ children, to, id }) {
  return (
    <Container>
      <Link to={`/search/articles/${id}`}>{children}</Link>
    </Container>
  );
}

SearchResultListItem.propTypes = {
  children: PropTypes.node,
  to: PropTypes.node,
  id: PropTypes.string,
};

export default SearchResultListItem;
