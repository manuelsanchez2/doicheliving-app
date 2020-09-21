import styled from "@emotion/styled";
import PropTypes from "prop-types";

const HomeSocialSection = styled.div`
  padding: 1rem 0;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: var(--color-primary);
  border-radius: 10px 10px 10px 10px;
  border: 1px solid var(--color-dark-border);
  box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);
`;

HomeSocialSection.propTypes = {
  children: PropTypes.node,
};

export default HomeSocialSection;
