import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import { getArticles } from "../../api/articles";
import GridContainer from "../../components/GridContainer";
import SearchSelector from "../../components/SearchSelector";
import SearchSelectorForm from "../../components/SearchSelectorForm";
import SearchResultList from "../../components/SearchResultList/SearchResultList";
import SearchResultListItem from "../../components/SearchResultListItem/SearchResultListItem";
import SearchResultListItemImage from "../../components/SearchResultListItemImage/SearchResultListItemImage";
import SearchResultListItemText from "../../components/SearchResultListItemText/SearchResultListItemText";

const Search = () => {
  const [articles, setArticles] = useState(null);
  const [search, setSearch] = useState({
    city: "",
    category: "",
  });

  const searchInfo = (e) => {
    e.preventDefault();
    setSearch({
      city: e.target.city.value,
      category: e.target.category.value,
    });
  };

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

  const filteredArticles = articles
    ? articles.filter(
        (article) =>
          article.city === search.city && article.category === search.category
      )
    : null;

  return (
    <GridContainer>
      <Header />

      <Main>
        <h2>¿Qué estás buscando?</h2>
        <SearchSelectorForm onSubmit={searchInfo}>
          <SearchSelector>
            <label>Ciudad</label>
            <select name="city" id="city">
              <option value="berlin">Berlín</option>
              <option value="cologne">Colonia</option>
              <option value="frankfurt">Frankfurt</option>
              <option value="hamburg">Hamburg</option>
              <option value="munich">Múnich</option>
              <option value="all">Todas</option>
            </select>
          </SearchSelector>

          <SearchSelector>
            <label>Categoría</label>
            <select name="category" id="category">
              <option value="accommodation">Dónde dormir</option>
              <option value="restaurants">Dónde comer</option>
              <option value="transport">Cómo moverse</option>
              <option value="parks">Zonas verdes</option>
              <option value="sightseeing">Monumentos</option>
              <option value="routes">Rutas (Elige Todas arriba)</option>
              <option value="organization">
                Organiza tu viaje (Elige Todas arriba)
              </option>
            </select>
          </SearchSelector>
          <input type="submit" value="BUSCAR" />
        </SearchSelectorForm>
        <h3>Resultados de búsqueda</h3>
        {filteredArticles ? (
          <SearchResultList>
            {filteredArticles.map((article) => (
              <SearchResultListItem key={article.id} id={article.id}>
                <SearchResultListItemImage
                  src={article.image}
                  alt={article.title}
                />
                <SearchResultListItemText
                  title={article.title}
                  description={article.description}
                />
              </SearchResultListItem>
            ))}
          </SearchResultList>
        ) : (
          <p>Todavía no has realizado ninguna búsqueda.</p>
        )}
      </Main>

      <Footer />
    </GridContainer>
  );
};

export default Search;
