import styled from "@emotion/styled";
import PropTypes from "prop-types";

const HomeSubscribeSection = styled.div`
  height: 20%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
`;

HomeSubscribeSection.propTypes = {
  children: PropTypes.node,
};

export default HomeSubscribeSection;
