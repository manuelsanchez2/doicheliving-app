import styled from "@emotion/styled";
import PropTypes from "prop-types";

const HomeSubscribeSectionText = styled.p`
  margin-top: 1.5rem;
  font-family: var(--font-lato);
  font-size: 1rem;
  text-align: center;
`;

HomeSubscribeSectionText.propTypes = {
  children: PropTypes.node,
};

export default HomeSubscribeSectionText;
