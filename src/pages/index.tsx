import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { movieSearchRequestedAction } from "../redux/movie/actions";
import SearchPageTemplate from "../templates/SearchPageTemplate/SearchPageTemplate";

/**
 *
 * SearchPage - home page of our site
 *
 * Search movies through search input,
 * show list of movies
 *
 */
const SearchPage = () => {
  // page state
  const [search, setSearch] = useState("");

  // route
  const history = useHistory();

  // hooks
  const dispatch = useAppDispatch();
  const movieCacheObj = useAppSelector(
    (state) => state.movie.movieCache[search]
  );
  const favoriteMovies = useAppSelector((state) => state.movie.favoriteMovies);
  const { movies, isLoading, isError } = React.useMemo(
    () => movieCacheObj || { movies: [], isError: false, isLoading: false },
    [movieCacheObj]
  );

  // callbacks
  const onSearchChange = React.useCallback(
    (search: string) => {
      setSearch(search);
      dispatch(movieSearchRequestedAction(search, false));
    },
    [dispatch]
  );

  const onNextPage = React.useCallback(() => {
    dispatch(movieSearchRequestedAction(search, true));
  }, [dispatch, search]);

  const onMovieClick = React.useCallback(
    (id: string) => {
      history.replace(`/details/${id}`);
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
    />
  );
};

export default SearchPage;
