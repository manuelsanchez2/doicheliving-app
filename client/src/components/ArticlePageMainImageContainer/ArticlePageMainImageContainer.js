import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import ReturnButton from "../ReturnButton/ReturnButton";
import returnSrc from "../../assets/icons/arrow-contrast.svg";
import FavButton from "../FavButton/FavButton";
import ArticlePageMainImageContainerWrapper from "../ArticlePageMainImageContainerWrapper/ArticlePageMainImageContainerWrapper";

const ArticlePageMainImageContainer = ({ src, alt, children, inactive }) => {
  const history = useHistory();
  return (
    <ArticlePageMainImageContainerWrapper>
      <ReturnButton
        onClick={() => history.goBack()}
        src={returnSrc}
        alt="return"
      />
      <img src={src} alt={alt} />
      <FavButton onClick={() => !inactive} />
    </ArticlePageMainImageContainerWrapper>
  );
};

ArticlePageMainImageContainer.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  inactive: PropTypes.bool,
};

export default ArticlePageMainImageContainer;
