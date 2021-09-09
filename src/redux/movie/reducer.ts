import { Reducer } from "redux";
import {
  MovieAction,
  MOVIE_ADD_TO_FAVORITE,
  MOVIE_CACHE_HIT,
  MOVIE_FETCH_FAILED,
  MOVIE_FETCH_REQUESTED,
  MOVIE_FETCH_SUCCESSFUL,
  MOVIE_REMOVE_FROM_FAVORITE,
  MOVIE_SEARCH_FAILED,
  MOVIE_SEARCH_REQUESTED,
  MOVIE_SEARCH_SUCCESSFUL,
} from "./actions";
import { getCacheObj, loadFavoriteMovies, saveFavoriteMovies } from "./helpers";
import { FavoriteMovies, Movie, MovieCache } from "./types";

export interface MovieState {
  movieCache: MovieCache;
  movieDetails: {
    movie: Movie | null;
    isLoading: boolean;
  };
  favoriteMovies: FavoriteMovies;
  currentSearch: string;
}
const initialState: MovieState = {
  movieCache: {},
  movieDetails: {
    movie: null,
    isLoading: false,
  },
  favoriteMovies: loadFavoriteMovies(),
  currentSearch: "",
};

const movieReducer: Reducer<MovieState, MovieAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case MOVIE_SEARCH_SUCCESSFUL: {
      const obj = getCacheObj(state.movieCache, action.payload.search);
      obj.page = action.payload.page;
      obj.movies = [...obj.movies, ...action.payload.movies];
      obj.isError = false;
      obj.isLoading = false;

      return {
        ...state,
        movieCache: { ...state.movieCache, [action.payload.search]: obj },
      };
    }
    case MOVIE_SEARCH_FAILED: {
      const obj = getCacheObj(state.movieCache, action.payload.search);
      obj.isError = true;
      obj.isLoading = false;

      return {
        ...state,
        movieCache: { ...state.movieCache, [action.payload.search]: obj },
      };
    }
    case MOVIE_CACHE_HIT: {
      const obj = getCacheObj(state.movieCache, action.payload.search);
      obj.isLoading = false;

      return {
        ...state,
        movieCache: { ...state.movieCache, [action.payload.search]: obj },
      };
    }
    case MOVIE_SEARCH_REQUESTED: {
      const obj = getCacheObj(state.movieCache, action.payload.search);
      obj.isLoading = true;

      return {
        ...state,
        movieCache: { ...state.movieCache, [action.payload.search]: obj },
        currentSearch: action.payload.search,
      };
    }
    case MOVIE_FETCH_REQUESTED: {
      return {
        ...state,
        movieDetails: {
          movie: null,
          isLoading: true,
        },
      };
    }
    case MOVIE_FETCH_SUCCESSFUL: {
      return {
        ...state,
        movieDetails: {
          movie: action.payload.movie,
          isLoading: false,
        },
      };
    }
    case MOVIE_FETCH_FAILED: {
      return {
        ...state,
        movieDetails: {
          movie: null,
          isLoading: false,
        },
      };
    }
    case MOVIE_ADD_TO_FAVORITE: {
      const favoriteMovies = {
        ...state.favoriteMovies,
      };

      if (!favoriteMovies[action.payload.id]) {
        favoriteMovies[action.payload.id] = action.payload.movie;
        saveFavoriteMovies(favoriteMovies);
        return {
          ...state,
          favoriteMovies,
        };
      }
      return state;
    }
    case MOVIE_REMOVE_FROM_FAVORITE: {
      const favoriteMovies = { ...state.favoriteMovies };

      if (favoriteMovies[action.payload.id]) {
        delete favoriteMovies[action.payload.id];
        saveFavoriteMovies(favoriteMovies);
        return {
          ...state,
          favoriteMovies,
        };
      }
      return state;
    }

    default:
      return state;
  }
};

export default movieReducer;
