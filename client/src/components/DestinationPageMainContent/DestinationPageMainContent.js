import React from "react";
import PropTypes from "prop-types";
import DestinationPageContainer from "../DestinationPageContainer/DestinationPageContainer";

const DestinationPageMainContent = ({ title, description, subtitle }) => {
  return (
    <DestinationPageContainer>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{subtitle}</h3>
    </DestinationPageContainer>
  );
};

DestinationPageMainContent.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  subtitle: PropTypes.string,
};

export default DestinationPageMainContent;
