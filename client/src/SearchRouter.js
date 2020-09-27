import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Article from "./pages/Article/Article";
import Search from "./pages/Search";

const SearchRouter = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/articles/:id`}>
          <Article />
        </Route>
        <Route exact path={`${path}/`}>
          <Search />
        </Route>
      </Switch>
    </>
  );
};

export default SearchRouter;
