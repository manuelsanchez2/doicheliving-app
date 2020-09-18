import styled from "@emotion/styled";
import PropTypes from "prop-types";

const SingupForm = styled.form`
  display: flex;
  flex-direction: column;

  input[type="submit"] {
    margin: 0 auto 0.5rem auto;
  }
`;

SingupForm.propTypes = {
  children: PropTypes.node,
};

export default SingupForm;
