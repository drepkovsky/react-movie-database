import { takeEvery } from "redux-saga/effects";
import { MOVIE_FETCH_REQUESTED } from "./actions";
import { MovieFetchRequestedAction } from "./types";

function* fetchMovie(action: MovieFetchRequestedAction) {}

export default function* movieSaga() {
  yield takeEvery(MOVIE_FETCH_REQUESTED, fetchMovie);
}
