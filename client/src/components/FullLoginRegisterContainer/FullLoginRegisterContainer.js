import styled from "@emotion/styled";
import PropTypes from "prop-types";

const FullLoginRegisterContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  background: var(--color-primary);

  img {
    max-width: 5rem;
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 0.8rem;
    font-size: 1.2rem;
  }
`;

FullLoginRegisterContainer.propTypes = {
  children: PropTypes.node,
};

export default FullLoginRegisterContainer;
