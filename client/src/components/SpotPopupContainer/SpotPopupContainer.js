import styled from "@emotion/styled";

const SpotPopupContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: inherit;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid var(--color-dark-border);
  box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);
  z-index: 20;

  h3 {
    font-size: 0.7rem;
    font-family: var(--font-lato);
    font-weight: bold;
    width: 87%;
    height: 10%;
    margin-left: 0.3rem;
  }

  button {
    width: 10%;
    height: 10%;
    border-radius: 50px;
    margin-right: 2px;
  }

  div {
    width: 65%;
    margin-left: 0.3rem;
    padding-bottom: 0.1rem;
  }

  div > div {
    font-size: 0.6rem;
    font-family: var(--font-lato);
    margin: 0 auto 6px 0;
    font-weight: bold;
  }

  img {
    height: 40%;
    width: 33%;
    border-radius: 5px;
    border: 1px solid var(--color-light-border);
    box-shadow: 0.5px 0px 10px 0px rgba(0, 0, 0, 0.3);
    margin-right: 1px;
    margin-bottom: 5px;
  }
  small {
    font-size: 0.5rem;
    font-style: italic;
  }
  p {
    font-size: 0.6rem;
    font-family: var(--font-lato);
    width: 90%;
  }
`;

export default SpotPopupContainer;
