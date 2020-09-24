import styled from "@emotion/styled";

const SearchSelectorForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    border: 1px solid var(--color-gradient-submit);
    border-radius: 15px;
    background: var(--color-gradient-submit);
    padding: 0.3rem 2rem;
    color: var(--color-white);
    font-family: var(--font-lato);
    font-size: 0.8rem;
    letter-spacing: 2.5px;
    align-self: center;
  }
`;

export default SearchSelectorForm;
