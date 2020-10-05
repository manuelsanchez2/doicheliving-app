import styled from "@emotion/styled";
import React, { useState } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useForm } from "react-hook-form";
import { createSpot } from "../../api/spots";
import PropTypes from "prop-types";

const EntryForm = styled.form`
  input,
  textarea {
    font-family: var(--font-lato);
    margin: 0.5rem 0;
    display: block;
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--color-dark-border);
  }

  button {
    margin-top: 1.2rem;
  }
`;

const EntryFormErrorMessage = styled.h3`
  color: red;
`;

const SpotEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      const spotCreated = await createSpot(data);
      console.log(spotCreated);
      onClose();
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <EntryForm onSubmit={handleSubmit(onSubmit)}>
      {error ? <EntryFormErrorMessage>{error}</EntryFormErrorMessage> : null}
      <label>
        Título
        <input name="title" required ref={register} />
      </label>

      <label>
        Comentarios
        <textarea name="description" rows={3} ref={register}></textarea>
      </label>

      <label>
        Día de visita <input name="visitDate" type="date" ref={register} />
      </label>

      <SubmitButton disabled={loading}>
        {loading ? "CARGANDO..." : "CREAR SPOT"}
      </SubmitButton>
    </EntryForm>
  );
};

SpotEntryForm.propTypes = {
  children: PropTypes.node,
  location: PropTypes.any,
  onClose: PropTypes.func,
};

export default SpotEntryForm;
