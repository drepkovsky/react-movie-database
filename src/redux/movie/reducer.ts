import { Reducer } from "react";
import { Movie, MovieAction, MovieState } from "./types";

const initialState: MovieState = {
  movies: [],
};

const movieReducer: Reducer<MovieState, MovieAction> = (
  state = initialState,
  action
) => {
  return state;
};

export default movieReducer;
