import styled from "@emotion/styled";

const ArticlePageMainImageContainerWrapper = styled.div`
  position: relative;
  background: white;

  img:nth-child(2) {
    width: 100%;
    height: 13.5rem;
    object-fit: cover;
    border-radius: 10px;

    border-bottom: 0.2px solid var(--color-dark-border);
    box-shadow: 0.5px 0px 5px 0px rgba(0, 0, 0, 0.01);
  }

  button:first-of-type {
    position: absolute;
    top: 0.5%;
    left: 3%;
    z-index: 30;
    background: var(--color-primary);
  }
  button:last-of-type {
    position: absolute;
    top: 85%;
    left: 80%;
    z-index: 30;
  }

  button:last-of-type img {
    width: 1.5rem;
    filter: ${(props) => (props.inactive ? "grayscale(1)" : "none")};
  }
`;

export default ArticlePageMainImageContainerWrapper;
