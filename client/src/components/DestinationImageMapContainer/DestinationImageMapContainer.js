import React from "react";
import PropTypes from "prop-types";
import DestinationArticleImage from "../DestinationArticleImage";
import DestinationArticleImageNav from "../DestinationArticleImageNav/DestinationArticleImageNav";

const DestinationImageMapContainer = ({ src, alt, imageTitle }) => {
  return (
    <DestinationArticleImageNav>
      <DestinationArticleImage>
        <img src={src} alt={alt} />
        <small>{imageTitle}</small>
      </DestinationArticleImage>
      <DestinationArticleImage>
        <img src={src} alt={alt} />
        <small>{imageTitle}</small>
      </DestinationArticleImage>
      <DestinationArticleImage>
        <img src={src} alt={alt} />
        <small>{imageTitle}</small>
      </DestinationArticleImage>
      <DestinationArticleImage>
        <img src={src} alt={alt} />
        <small>{imageTitle}</small>
      </DestinationArticleImage>
      <DestinationArticleImage>
        <img src={src} alt={alt} />
        <small>{imageTitle}</small>
      </DestinationArticleImage>
      <DestinationArticleImage>
        <img src={src} alt={alt} />
        <small>{imageTitle}</small>
      </DestinationArticleImage>
    </DestinationArticleImageNav>
  );
};

DestinationImageMapContainer.propTypes = {
  children: PropTypes.node,
  imageTitle: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default DestinationImageMapContainer;
