import styled from "@emotion/styled";
import PropTypes from "prop-types";

const SpotEntryFormContainer = styled.div`
  max-width: 350px;
  padding: 0.5rem;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid var(--color-darkgrayborder);
  box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);
`;

SpotEntryFormContainer.propTypes = {
  children: PropTypes.node,
};

export default SpotEntryFormContainer;
