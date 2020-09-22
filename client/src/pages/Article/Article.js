import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticlePageMainImageContainer from "../../components/ArticlePageMainImageContainer";
import pictureTest from "../../assets/images/picture-test-1.jpg";
import GridContainer from "../../components/GridContainer";
import ArticlePageMainContent from "../../components/ArticlePageMainContent/ArticlePageMainContent";

const Article = () => {
  return (
    <GridContainer>
      <Header />
      <ArticlePageMainImageContainer src={pictureTest} alt="picturetest" />
      <ArticlePageMainContent />

      <Footer />
    </GridContainer>
  );
};

export default Article;
