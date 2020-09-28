import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContentContainer = styled.section`
  padding: 0 1em 0 1em;
  background: white;
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 0.2rem;
  }
  h3 {
    border-left: 3px solid var(--color-primary);
    margin: 0.8rem 0.2rem 0.5 8rem 0;
    padding-left: 0.5rem;
  }
  h4 {
    margin: 0.8rem 0.2rem 0.5 8rem 0;
    text-align: center;
  }
  p {
    margin: 0.7rem 0;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    align-self: center;
    width: 90%;
    margin: 0.8rem auto;
    border-radius: 10px;
    box-shadow: 0.5px 0px 5px 0px rgba(0, 0, 0, 0.01);
  }
  a {
    text-decoration: none;
    color: red;
  }
  button {
    align-self: center;
    margin: 1rem 0;
    border: 1px solid var(--color-gradient-submit);
    border-radius: 15px;
    max-width: 70%;
    background: var(--color-gradient-submit);
    padding: 0.5rem 2rem;
    color: var(--color-white);
    font-family: var(--font-lato);
    font-size: 0.7rem;
    letter-spacing: 1px;
    display: block;
  }
  button > a {
    color: white;
  }
  ol {
    margin-left: 0.2rem;
    padding-left: 0.8rem;
    font-family: var(--font-lato);
  }
  ul {
    margin-left: 0.2rem;
    padding-left: 0.8rem;
    font-family: var(--font-lato);
  }
  li {
    margin-bottom: 0.2rem;
  }
`;

const ArticlePageMainContent = ({ src, alt, children, title, body }) => {
  return (
    <ContentContainer>
      <h2>{title}</h2>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </ContentContainer>
  );
};

ArticlePageMainContent.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};

export default ArticlePageMainContent;
