import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

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

  img {
    width: 25%;
    border-radius: 0.7rem;
  }

  div {
    margin-left: 0.6rem;
    line-height: 0.5rem;
  }

  div > h4 {
    font-size: 0.75rem;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  div > small {
    font-size: 0.65rem;
    margin: 0;
    font-style: italic;
  }
`;

function SearchResultListItem() {
  return (
    <Container>
      <Link to="/destinations/hamburg">
        <img src="https://i.imgur.com/Jycf1xG.jpg" alt="" />
        <div>
          <h4>Alojamiento en Hamburgo</h4>
          <small>
            El tema de cómo llegar en avión o cómo moverse por la ciudad o el
            país es importante, está claro, pero queremos tener la certeza de
            que descansaremos sobre techo firme y de que nuestras maletas
            estarán a salvo en algún lugar.
          </small>
        </div>
      </Link>
    </Container>
  );
}

export default SearchResultListItem;
