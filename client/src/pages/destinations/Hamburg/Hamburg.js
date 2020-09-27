import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import GridContainer from "../../../components/GridContainer";
import DestinationPageMainImageContainer from "../../../components/DestinationPageMainImageContainer";
import DestinationPageMainContent from "../../../components/DestinationPageMainContent";
import hamburgSrc from "../assets/hamburg.jpg";
import { getArticles } from "../../../api/articles";
import DestinationArticleImage from "../../../components/DestinationArticleImage";
import DestinationArticleImageNav from "../../../components/DestinationArticleImageNav/DestinationArticleImageNav";

const Hamburg = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const fetchedArticles = await getArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArticles();
  }, []);

  const ArticlesByCityHamburg = articles
    ? articles.filter((article) => article.city === "hamburg")
    : null;
  return (
    <GridContainer>
      <Header />
      <div>
        <DestinationPageMainImageContainer
          src={hamburgSrc}
          alt="picture of Hamburg"
        />
        <DestinationPageMainContent
          title="Hamburgo"
          description="Hamburgo es una ciudad a la que no le falta de nada. Tiene diversión y cultura para dar y regalar. Seguramente habrás escuchado que el puerto de Hamburgo es uno de los más famosos de Europa, o que tiene un barrio rojo de fiesta muy famoso (Sankt Pauli). Cualquier cosa que se diga se queda corta para describir la ciudad más bonita del norte de Alemania, ¡te lo aseguramos!"
          subtitle="Todo lo que debes saber sobre Hamburgo"
        />
        {ArticlesByCityHamburg ? (
          <DestinationArticleImageNav>
            {ArticlesByCityHamburg.map((article) => (
              <DestinationArticleImage
                key={article.id}
                id={article.id}
                src={article.image}
                alt={article.title}
                imageTitle={article.title}
              />
            ))}
          </DestinationArticleImageNav>
        ) : (
          " "
        )}
      </div>
      <Footer />
    </GridContainer>
  );
};

export default Hamburg;
