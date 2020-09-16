import styled from "@emotion/styled";
import React from "react";
import RedButton from "../RedButton/RedButton";

const EntryForm = styled.form`
  label,
  input,
  textarea {
    font-family: var(--font-lato);
    margin: 0.5rem 0;
    display: block;
    width: 100%;
  }

  button {
    margin-top: 1.2rem;
  }
`;

const SpotEntryForm = () => {
  return (
    <EntryForm>
      <label htmlFor="title">Título</label>
      <input name="title" required />
      <label htmlFor="description"> Comentarios </label>
      <textarea name="description" rows={3}></textarea>
      <label htmlFor="visitDate">Día de visita</label>
      <input name="visitDate" type="date" />
      <RedButton>CREAR SPOT</RedButton>
    </EntryForm>
  );
};

export default SpotEntryForm;
