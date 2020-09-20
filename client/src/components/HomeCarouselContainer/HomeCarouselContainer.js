import styled from "@emotion/styled";
import PropTypes from "prop-types";

const HomeCarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  > * {
    margin-right: 0.3rem;
  }
`;

HomeCarouselContainer.propTypes = {
  children: PropTypes.node,
};

export default HomeCarouselContainer;
