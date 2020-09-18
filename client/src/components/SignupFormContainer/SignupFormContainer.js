import styled from "@emotion/styled";
import PropTypes from "prop-types";

const SignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-white);
  border-radius: 10px 10px 10px 10px;
  border: 1px solid var(--color-darkgrayborder);
  box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);

  width: 100%;
  padding: 1.5rem 0;

  img {
    width: 15%;
  }

  small {
    margin-top: 0.5rem;
  }
`;

SignupFormContainer.propTypes = {
  children: PropTypes.node,
};

export default SignupFormContainer;
