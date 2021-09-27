import { FavoriteMovies, Movie, MoviePreview } from "./types";

export const MOVIE_SEARCH_SUCCESSFUL = "MOVIE_SEARCH_SUCCESSFUL";
export const MOVIE_SEARCH_FAILED = "MOVIE_SEARCH_FAILED";
export const MOVIE_SEARCH_REQUESTED = "MOVIE_SEARCH_REQUESTED";
export const MOVIE_FETCH_SUCCESSFUL = "MOVIE_FETCH_SUCCESSFUL";
export const MOVIE_FETCH_FAILED = "MOVIE_FETCH_FAILED";
export const MOVIE_FETCH_REQUESTED = "MOVIE_FETCH_REQUESTED";
export const MOVIE_CACHE_HIT = "MOVIE_CACHE_HIT";

export const MOVIE_ADD_TO_FAVORITE = "MOVIE_ADD_TO_FAVORITE";
export const MOVIE_SET_FAVORITES = "MOVIE_SET_FAVORITES";
export const MOVIE_REMOVE_FROM_FAVORITE = "MOVIE_REMOVE_FROM_FAVORITE";

export interface MovieSearchRequestedAction {
  type: typeof MOVIE_SEARCH_REQUESTED;
  payload: {
    search: string;
    nextPage: boolean;
  };
}
export interface MovieSearchSuccessfulAction {
  type: typeof MOVIE_SEARCH_SUCCESSFUL;
  payload: {
    movies: MoviePreview[];
    page: number;
    search: string;
  };
}
export interface MovieSearchFailedAction {
  type: typeof MOVIE_SEARCH_FAILED;
  payload: {
    search: string;
  };
}

export interface MovieFetchRequestedAction {
  type: typeof MOVIE_FETCH_REQUESTED;
  payload: {
    id: string;
  };
}
export interface MovieFetchSuccessfulAction {
  type: typeof MOVIE_FETCH_SUCCESSFUL;
  payload: {
    movie: Movie;
  };
}
export interface MovieFetchFailedAction {
  type: typeof MOVIE_FETCH_FAILED;
}
export interface MovieCacheHitAction {
  type: typeof MOVIE_CACHE_HIT;
  payload: {
    search: string;
  };
}

export interface MovieSetFavoritesAction {
  type: typeof MOVIE_SET_FAVORITES;
  payload: {
    favoriteMovies: FavoriteMovies;
  };
}

export interface MovieAddToFavoriteAction {
  type: typeof MOVIE_ADD_TO_FAVORITE;
  payload: {
    id: string;
    movie: Movie;
  };
}
export interface MovieRemoveFromFavoriteAction {
  type: typeof MOVIE_REMOVE_FROM_FAVORITE;
  payload: {
    id: string;
  };
}

export type MovieAction =
  | MovieFetchRequestedAction
  | MovieFetchSuccessfulAction
  | MovieFetchFailedAction
  | MovieSearchRequestedAction
  | MovieSearchSuccessfulAction
  | MovieSearchFailedAction
  | MovieCacheHitAction
  | MovieAddToFavoriteAction
  | MovieRemoveFromFavoriteAction
  | MovieSetFavoritesAction;

// Actions builder functions

export function movieSearchRequestedAction(
  search: string,
  nextPage: boolean
): MovieSearchRequestedAction {
  return {
    type: MOVIE_SEARCH_REQUESTED,
    payload: {
      search,
      nextPage,
    },
  };
}
export function movieSearchSuccessfulAction(
  movies: MoviePreview[],
  page: number,
  search: string
): MovieSearchSuccessfulAction {
  return {
    type: MOVIE_SEARCH_SUCCESSFUL,
    payload: {
      movies,
      page,
      search,
    },
  };
}
export function movieSearchFailedAction(
  search: string
): MovieSearchFailedAction {
  return {
    type: MOVIE_SEARCH_FAILED,
    payload: { search },
  };
}
export function movieCacheHitAction(search: string): MovieCacheHitAction {
  return {
    type: MOVIE_CACHE_HIT,
    payload: { search },
  };
}

export function movieFetchRequestedAction(
  id: string
): MovieFetchRequestedAction {
  return {
    type: MOVIE_FETCH_REQUESTED,
    payload: {
      id,
    },
  };
}
export function movieFetchSuccessfulAction(
  movie: Movie
): MovieFetchSuccessfulAction {
  return {
    type: MOVIE_FETCH_SUCCESSFUL,
    payload: {
      movie,
    },
  };
}
export function movieFetchFailedAction(): MovieFetchFailedAction {
  return {
    type: MOVIE_FETCH_FAILED,
  };
}

export function movieAddToFavoriteAction(
  id: string,
  movie: Movie
): MovieAddToFavoriteAction {
  return {
    type: MOVIE_ADD_TO_FAVORITE,
    payload: {
      id,
      movie,
    },
  };
}
export function movieRemoveFromFavoriteAction(
  id: string
): MovieRemoveFromFavoriteAction {
  return {
    type: MOVIE_REMOVE_FROM_FAVORITE,
    payload: {
      id,
    },
  };
}

export function movieSetFavoritesAction(
  favoriteMovies: FavoriteMovies
): MovieSetFavoritesAction {
  return {
    type: MOVIE_SET_FAVORITES,
    payload: {
      favoriteMovies,
    },
  };
}
