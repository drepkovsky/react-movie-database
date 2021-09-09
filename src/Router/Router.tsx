import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchPage from "../pages";
import DetailsPage from "../pages/details";
import FavoritePage from "../pages/favorite";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/favorite" exact>
          <FavoritePage />
        </Route>
        <Route path="/details/:movieId" exact>
          <DetailsPage />
        </Route>
        <Route path="/" exact>
          <SearchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
