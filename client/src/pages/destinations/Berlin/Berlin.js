import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import GridContainer from "../../../components/GridContainer";
import DestinationPageMainImageContainer from "../../../components/DestinationPageMainImageContainer";
import DestinationPageMainContent from "../../../components/DestinationPageMainContent";
import berlinSrc from "../assets/berlin.jpg";
import { getArticles } from "../../../api/articles";
import DestinationArticleImageNav from "../../../components/DestinationArticleImageNav/DestinationArticleImageNav";
import DestinationArticleImage from "../../../components/DestinationArticleImage";

const Berlin = () => {
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

  const ArticlesByCityBerlin = articles
    ? articles.filter((article) => article.city === "berlin")
    : null;
  return (
    <GridContainer>
      <Header />
      <div>
        <DestinationPageMainImageContainer
          src={berlinSrc}
          alt="picture of Berlin"
        />
        <DestinationPageMainContent
          title="Berlín"
          description="Bienvenidos a la que es sin duda la ciudad más multicultural de toda Alemania: son cada vez más las personas que se deciden ya no solo a visitar la ciudad sino también a venirse a vivir a Berlín. Siendo tal y como es, una ciudad repleta de eventos culturales y sociales de cualquier tipo, pero al mismo tiempo sede de grandes empresas a nivel europeo o mundial, es normal que la mayoría de la gente quede atrapada en sus redes."
          subtitle="Todo lo que debes saber sobre Berlín"
        />
        {ArticlesByCityBerlin ? (
          <DestinationArticleImageNav>
            {ArticlesByCityBerlin.map((article) => (
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

export default Berlin;
