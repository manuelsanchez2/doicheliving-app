import styled from "@emotion/styled";
import React from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useForm } from "react-hook-form";
import { createSpot } from "../../api/spots";
import PropTypes from "prop-types";

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

const SpotEntryForm = ({ location }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      const spotCreated = await createSpot(data);
      console.log(spotCreated);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <EntryForm onSubmit={handleSubmit(onSubmit)}>
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

      <SubmitButton>CREAR SPOT</SubmitButton>
    </EntryForm>
  );
};

SpotEntryForm.propTypes = {
  children: PropTypes.node,
  location: PropTypes.any,
};

export default SpotEntryForm;
