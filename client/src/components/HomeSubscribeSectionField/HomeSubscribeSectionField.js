import styled from "@emotion/styled";
import PropTypes from "prop-types";

const HomeSubscribeSectionField = styled.div`
  input {
    border: 1px solid var(--color-light-border);
    background: #f0f4f5;
    border-radius: 4px;
    padding: 0.5rem;
    margin: 0.3rem 0;
    flex: 1;
    width: 90vw;
  }

  button {
    border: 1px solid var(--color-gradient-submit);
    border-radius: 15px;
    background: var(--color-gradient-submit);
    margin: 0 auto;
    margin-top: 6px;
    padding: 0.5rem 2rem;
    color: var(--color-white);
    font-family: var(--font-lato);
    font-size: 1rem;
    letter-spacing: 3px;
    display: block;
  }
`;

HomeSubscribeSectionField.propTypes = {
  children: PropTypes.node,
};

export default HomeSubscribeSectionField;
