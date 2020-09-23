import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import GridContainer from "../../components/GridContainer";
import SearchSelector from "../../components/SearchSelector";
import SearchResultList from "../../components/SearchResultList/SearchResultList";
import SearchResultListItem from "../../components/SearchResultListItem/SearchResultListItem";

const Search = () => {
  return (
    <GridContainer>
      <Header />

      <Main>
        <h2>¿Qué estás buscando?</h2>

        <SearchSelector>
          <label>Ciudad</label>
          <select name="cities" id="cities">
            <option value="berlin">Berlín</option>
            <option value="cologne">Colonia</option>
            <option value="frankfurt">Frankfurt</option>
            <option value="hamburg">Hamburg</option>
            <option value="munich">Múnich</option>
            <option value="all">Todas</option>
          </select>
        </SearchSelector>
        <br />

        <SearchSelector>
          <label>Categoría</label>
          <select name="categories" id="categories">
            <option value="accomodation">Dónde dormir</option>
            <option value="restaurants">Dónde comer</option>
            <option value="transport">Cómo moverse</option>
            <option value="parks">Zonas verdes</option>
            <option value="routes">Rutas (Solo Alemania)</option>
            <option value="organization">
              Organiza tu viaje (Solo Alemania)
            </option>
          </select>
        </SearchSelector>

        <h3>Resultados de búsqueda</h3>
        <p>Todavía no has realizado ninguna búsqueda.</p>
        <SearchResultList>
          <SearchResultListItem></SearchResultListItem>
          <SearchResultListItem></SearchResultListItem>
          <SearchResultListItem></SearchResultListItem>
          <SearchResultListItem></SearchResultListItem>
          <SearchResultListItem></SearchResultListItem>
          <SearchResultListItem></SearchResultListItem>
          <SearchResultListItem></SearchResultListItem>
        </SearchResultList>
      </Main>

      <Footer />
    </GridContainer>
  );
};

export default Search;
