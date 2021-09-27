import React from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { movieSearchRequestedAction } from "../redux/movie/actions";
import {
  getCurrentSearch,
  getFavoriteMoviesMap,
  getMovieCacheObj,
} from "../redux/movie/selectors";
import SearchPageTemplate from "../templates/SearchPageTemplate/SearchPageTemplate";

/**
 *
 * SearchPage - home page of our site
 *
 * Search page provides a basic functionality for searching movies through search input.
 * Search results are showed in a list container with support of endless scrolling in our search page template.
 * Search results are stored and cached by search in redux store.
 * When search is started, movies are tried to being pulled out of the cache instantly.
 * Cache is not persistent and has no restrictions yet.
 *
 */
const SearchPage = () => {
  // route
  const history = useHistory();

  const dispatch = useAppDispatch();

  // selectors
  const favoriteMovies = useAppSelector(getFavoriteMoviesMap);
  const currentSearch = useAppSelector(getCurrentSearch);
  const movieCacheObj = useAppSelector(getMovieCacheObj(currentSearch));

  // callbacks
  const onSearchChange = React.useCallback(
    (search: string) => {
      dispatch(movieSearchRequestedAction(search, false));
    },
    [dispatch]
  );

  const onNextPage = React.useCallback(() => {
    dispatch(movieSearchRequestedAction(currentSearch, true));
  }, [dispatch, currentSearch]);

  const onMovieClick = React.useCallback(
    (id: string) => {
      history.push(`/details/${id}`);
    },
    [history]
  );

  const isFavoriteCheck = React.useCallback(
    (id: string) => !!favoriteMovies[id],
    [favoriteMovies]
  );

  return (
    <SearchPageTemplate
      onSearch={onSearchChange}
      movies={movieCacheObj.movies}
      isLoading={movieCacheObj.isLoading}
      isError={movieCacheObj.isError}
      onNextPage={onNextPage}
      onMovieClick={onMovieClick}
      isFavoriteCheck={isFavoriteCheck}
      currentSearch={currentSearch}
    />
  );
};

export default SearchPage;
