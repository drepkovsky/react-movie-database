import React from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { movieSearchRequestedAction } from "../redux/movie/actions";
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
  const favoriteMovies = useAppSelector((state) => state.movie.favoriteMovies);
  const currentSearch = useAppSelector((state) => state.movie.currentSearch);
  const movieCacheObj = useAppSelector(
    (state) => state.movie.movieCache[currentSearch]
  );
  const { movies, isLoading, isError } = React.useMemo(
    () => movieCacheObj || { movies: [], isError: false, isLoading: false },
    [movieCacheObj]
  );

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
      movies={movies}
      isLoading={isLoading}
      isError={isError}
      onNextPage={onNextPage}
      onMovieClick={onMovieClick}
      isFavoriteCheck={isFavoriteCheck}
      currentSearch={currentSearch}
    />
  );
};

export default SearchPage;
