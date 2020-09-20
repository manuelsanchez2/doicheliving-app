import styled from "@emotion/styled";
import PropTypes from "prop-types";

const SignupFormInputWrapper = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  align-items: center;
  & > label {
    flex: 0 0 80px;
    font-family: var(--font-lato);
    font-size: 0.7rem;
    margin-left: 0.5rem;
  }
  & > input[type="password"],
  input[type="email"],
  input[type="text"],
  input[type="name"] {
    border: 1px solid var(--color-grayborder);
    background: #f0f4f5;
    border-radius: 4px 4px 4px 4px;
    padding: 0.5rem 0.5rem 0.2rem 3.1rem;
    max-width: 65%;
  }
`;

SignupFormInputWrapper.propTypes = {
  children: PropTypes.node,
};

export default SignupFormInputWrapper;
