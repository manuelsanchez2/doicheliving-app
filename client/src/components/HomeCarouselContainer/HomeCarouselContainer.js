import styled from "@emotion/styled";

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

export default HomeCarouselContainer;
