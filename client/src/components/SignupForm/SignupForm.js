import styled from "@emotion/styled";

const SingupForm = styled.form`
  display: flex;
  flex-direction: column;

  input[type="submit"] {
    margin: 0.3rem auto 0.5rem auto;
    border: 1px solid var(--color-primary);
    background: var(--color-primary);
    border-radius: 10px;
    color: var(--color-white);
    font-family: var(--font-lato);
    font-size: 0.8rem;
    letter-spacing: 2px;
    padding: 0.3rem 1.5rem;
  }
`;

export default SingupForm;
