import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import GridContainer from "../../../components/GridContainer";
import DestinationPageMainImageContainer from "../../../components/DestinationPageMainImageContainer";
import DestinationPageMainContent from "../../../components/DestinationPageMainContent";
import frankfurtSrc from "../assets/frankfurt.jpg";
import { getArticles } from "../../../api/articles";
import DestinationArticleImageNav from "../../../components/DestinationArticleImageNav/DestinationArticleImageNav";
import DestinationArticleImage from "../../../components/DestinationArticleImage";

const Frankfurt = () => {
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

  const ArticlesByCityFrankfurt = articles
    ? articles.filter((article) => article.city === "frankfurt")
    : null;
  return (
    <GridContainer>
      <Header />
      <div>
        <DestinationPageMainImageContainer
          src={frankfurtSrc}
          alt="picture of Frankfurt"
        />
        <DestinationPageMainContent
          title="Frankfurt"
          description="Por si no lo sabíais, Frankfurt es la actual capital financiera de Alemania. Situada a orillas del río Main (por eso a lo mejor lo has visto como Frankfurt am Main o Fráncfort del Meno en español), la ciudad destaca por sus numerosos rascacielos. De hecho, 13 de los 15 rascacielos que hay en Alemania a día de hoy se encuentran en Frankfurt.

          Y, aunque las comparaciones son odiosas, suponemos que es por eso que muchos llaman a la ciudad «Mainhattan». Si hay algo en lo que se parece a Nueva York, es que desde muchas partes de la ciudad vas a poder disfrutar de una bonitas vistas del skyline."
          subtitle="Todo lo que debes saber sobre Frankfurt"
        />
        {ArticlesByCityFrankfurt ? (
          <DestinationArticleImageNav>
            {ArticlesByCityFrankfurt.map((article) => (
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

export default Frankfurt;
