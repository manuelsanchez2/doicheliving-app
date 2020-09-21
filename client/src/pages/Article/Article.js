import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticlePageMainImageContainer from "../../components/ArticlePageMainImageContainer";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import pictureTest from "../../assets/images/picture-test-1.jpg";
import MainArticlePage from "../../components/MainArticlePage/MainArticlePage";
import returnSrc from "../../assets/icons/arrow.svg";

const ArticlePage = () => {
  return (
    <>
      <Header />

      <MainArticlePage>
        <ReturnButton src={returnSrc} alt="return button" />
        <ArticlePageMainImageContainer src={pictureTest} alt="picturetest" />
      </MainArticlePage>

      <Footer />
    </>
  );
};

export default ArticlePage;
