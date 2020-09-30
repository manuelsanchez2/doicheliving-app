import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 42vw;
  background: var(--color-white);
  border-radius: 10px 10px 10px 10px;
  border: 1px solid var(--color-dark-border);
  box-shadow: 0.5px 0px 10px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  padding-top: 0.3rem;
  margin-right: 0.1rem;

  a {
    text-decoration: none;
    color: var(--color-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > a > img {
    height: 2.3vh;
    margin-bottom: 0.2rem;
    margin-left: 0.6rem;
  }

  & > a > small {
    font-size: 0.6rem;
    margin-left: 0.5rem;
  }
`;

const HomeSocialSectionItemContainer = ({ href, small, alt, src }) => {
  return (
    <Container>
      <a href={href} rel="nofollow noreferrer" target="_blank">
        <img src={src} alt={alt} />
        <small>{small}</small>
      </a>
    </Container>
  );
};

HomeSocialSectionItemContainer.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  small: PropTypes.string,
};

export default HomeSocialSectionItemContainer;
