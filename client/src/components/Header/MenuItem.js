import styled from "@emotion/styled";

const MenuItem = styled.li`
  margin-top: 0.5rem;

  > a {
    display: flex;
    padding: 0.6rem 0rem;
    max-width: 90%;
    align-items: center;
    text-decoration: none;
    color: var(--color-secondary);
    border-radius: 10px;
    border: 1.5px solid var(--color-dark-border);
    background-color: var(--color-white);
    box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);
  }
`;

export default MenuItem;
