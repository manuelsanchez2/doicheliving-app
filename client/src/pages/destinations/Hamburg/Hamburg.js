import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import GridContainer from "../../../components/GridContainer";
import DestinationPageMainImageContainer from "../../../components/DestinationPageMainImageContainer";
import hamburgSrc from "../assets/hamburg.jpeg";

const Hamburg = () => {
  return (
    <GridContainer>
      <Header />
      <DestinationPageMainImageContainer
        src={hamburgSrc}
        alt="picture of Hamburg"
      />
      <Footer />
    </GridContainer>
  );
};

export default Hamburg;
