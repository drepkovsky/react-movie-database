import { FavoriteMovies, MovieCache, MovieCacheObj } from "./types";
export const emptyMovieCacheObject: MovieCacheObj = {
  movies: [],
  page: 0,
  isError: false,
  isLoading: false,
};

/**
 *
 * @returns a new instance of object from cache or creates new one
 */
export function getCacheObj(cache: MovieCache, search: string): MovieCacheObj {
  return { ...(cache[search] || emptyMovieCacheObject) };
}

export const FAVORITE_MOVIES_STORAGE_KEY = "favorite_movies";

export function saveFavoriteMovies(favoriteMovies: FavoriteMovies | null) {
  localStorage.setItem(
    FAVORITE_MOVIES_STORAGE_KEY,
    JSON.stringify(favoriteMovies)
  );
}
export function loadFavoriteMovies(): FavoriteMovies {
  let result = localStorage.getItem(FAVORITE_MOVIES_STORAGE_KEY);

  if (!result) return {};

  return JSON.parse(result);
}
