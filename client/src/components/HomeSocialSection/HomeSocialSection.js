import styled from "@emotion/styled";
import PropTypes from "prop-types";

const HomeSocialSection = styled.div`
  height: 30vh;
  display: flex;
  flex-flow: column nowrap;

  h3 {
    margin: 0 auto;
  }
`;

HomeSocialSection.propTypes = {
  children: PropTypes.node,
};

export default HomeSocialSection;
