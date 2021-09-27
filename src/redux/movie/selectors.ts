import { RootState } from "../store";
import { MovieCacheObj } from "./types";

const EMPTY_MOVIE_CACHE: MovieCacheObj = {
  movies: [],
  isError: false,
  isLoading: false,
  page: 0,
};

export const getMovieCache = (state: RootState) => state.movie.movieCache;

export const getMovieCacheObj = (search: string) => (state: RootState) =>
  state.movie.movieCache[search] || EMPTY_MOVIE_CACHE;

export const getFavoriteMoviesMap = (state: RootState) =>
  state.movie.favoriteMovies;

export const getFavoriteMoviesArray = (state: RootState) =>
  Object.values(state.movie.favoriteMovies);

export const getCurrentSearch = (state: RootState) => state.movie.currentSearch;
