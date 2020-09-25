import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticlePageMainImageContainer from "../../components/ArticlePageMainImageContainer";
import ArticlePageMainContent from "../../components/ArticlePageMainContent/ArticlePageMainContent";
import { getArticle } from "../../api/articles";

const Article = ({ src, alt, title, body }) => {
  const { id } = useParams();
  const [fetchedArticle, setFetchedArticle] = useState({});

  useEffect(() => {
    async function showArticle() {
      try {
        const loadedArticle = await getArticle(id);
        setFetchedArticle(loadedArticle);
        console.log(id);
        console.log(fetchedArticle);
      } catch (error) {
        console.log(error);
      }
    }
    showArticle();
  }, [id]);

  return (
    <>
      <Header />
      <ArticlePageMainImageContainer
        src={fetchedArticle.image}
        alt={fetchedArticle.title}
      />
      <ArticlePageMainContent
        title={fetchedArticle.title}
        body={fetchedArticle.body}
      />
      <div>This is a test</div>
      <div>This is a test</div>
      <div>This is a test</div>
      <div>This is a test</div>
      <div>This is a test</div>
      <div>This is a test</div>
      <div>This is a test</div>
      <div>This is a test</div>
      <div>This is a test</div>
      <Footer />
    </>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  src: PropTypes.any,
  alt: PropTypes.any,
};

export default Article;
