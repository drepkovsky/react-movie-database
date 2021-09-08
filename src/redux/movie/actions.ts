import { MovieFetchRequestedAction } from "./types";

export const MOVIE_FETCH_SUCCESSFUL = "MOVIE_FETCH_SUCCESSFUL";
export const MOVIE_FETCH_FAILED = "MOVIE_FETCH_SUCCESSFUL";
export const MOVIE_FETCH_REQUESTED = "MOVIE_FETCH_REQUESTED";

// TODO: IMPLEMENT SOME QUERY PAYLOAD

export function movieFetchRequestedAction(): MovieFetchRequestedAction {
  return {
    type: MOVIE_FETCH_REQUESTED,
  };
}
