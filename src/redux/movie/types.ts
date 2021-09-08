import {
  MOVIE_FETCH_FAILED,
  MOVIE_FETCH_REQUESTED,
  MOVIE_FETCH_SUCCESSFUL,
} from "./actions";

export interface Rating {
  Source: string;
  Value: string;
}

export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface MovieFetchRequestedAction {
  type: typeof MOVIE_FETCH_REQUESTED;
}
export interface MovieFetchSuccessfulAction {
  type: typeof MOVIE_FETCH_SUCCESSFUL;
  payload: {
    movies: Movie[];
  };
}
export interface MovieFetchFailedAction {
  type: typeof MOVIE_FETCH_FAILED;
}

export type MovieAction =
  | MovieFetchRequestedAction
  | MovieFetchSuccessfulAction
  | MovieFetchFailedAction;

export interface MovieState {
  movies: Movie[];
}
