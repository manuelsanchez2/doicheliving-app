import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import GridContainer from "../../components/GridContainer";

function ErrorPage() {
  return (
    <GridContainer>
      <Header />
      <Main>
        <h2>Lo sentimos</h2>
        <p>Algo ha debido salir mal. </p>
      </Main>
      <Footer />
    </GridContainer>
  );
}

export default ErrorPage;
