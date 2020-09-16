import styled from "@emotion/styled";
import React from "react";
import RedButton from "../RedButton/RedButton";
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

  const onSubmit = (data) => {
    console.log(data);
    try {
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      const spotCreated = createSpot(data);
      console.log(spotCreated);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <EntryForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Título</label>
      <input name="title" required ref={register} />
      <label htmlFor="description"> Comentarios </label>
      <textarea name="description" rows={3} ref={register}></textarea>
      <label htmlFor="visitDate">Día de visita</label>
      <input name="visitDate" type="date" ref={register} />
      <RedButton>CREAR SPOT</RedButton>
    </EntryForm>
  );
};

SpotEntryForm.propTypes = {
  children: PropTypes.node,
  location: PropTypes.any,
};

export default SpotEntryForm;
