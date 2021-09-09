import { call, put, select, StrictEffect, takeEvery } from "redux-saga/effects";
import {
  MovieApi,
  MovieError,
  MoviesFindByIdData,
  MoviesFindData,
} from "../../api/movies";
import { RootState } from "../store";
import {
  movieCacheHitAction,
  movieFetchFailedAction,
  MovieFetchRequestedAction,
  movieFetchSuccessfulAction,
  movieSearchFailedAction,
  MovieSearchRequestedAction,
  movieSearchSuccessfulAction,
  MOVIE_FETCH_REQUESTED,
  MOVIE_SEARCH_REQUESTED,
} from "./actions";
import { emptyMovieCacheObject } from "./helpers";
import { MovieCache } from "./types";

// saga
export default function* movieSaga(): Generator<StrictEffect> {
  yield takeEvery(MOVIE_SEARCH_REQUESTED, searchMovies);
  yield takeEvery(MOVIE_FETCH_REQUESTED, fetchMovie);
}

// selectors
const selectCache = (state: RootState) => state.movie.movieCache;

// workers
function* searchMovies(action: MovieSearchRequestedAction) {
  try {
    const cache: MovieCache = yield select(selectCache);

    let cacheObj = cache[action.payload.search] || emptyMovieCacheObject;

    // search for movies only if the query was successful in past and you want to paginate
    if (!cacheObj.isError && (action.payload.nextPage || cacheObj.page === 0)) {
      cacheObj.page += 1;
      // fetch movies
      const data: MoviesFindData = yield call(
        MovieApi.getInstance().find,
        action.payload.search,
        cacheObj.page
      );
      yield put(
        movieSearchSuccessfulAction(
          data.Search,
          cacheObj.page,
          action.payload.search
        )
      );
    } else {
      yield put(movieCacheHitAction(action.payload.search));
    }

    // put fetched movies to store
  } catch (err: any) {
    // if there is a movie error put err message to store
    if (err instanceof MovieError) {
      yield put(movieSearchFailedAction(action.payload.search));
    }
  }
}

function* fetchMovie(action: MovieFetchRequestedAction) {
  try {
    const data: MoviesFindByIdData = yield call(
      MovieApi.getInstance().findById,
      action.payload.id
    );

    yield put(movieFetchSuccessfulAction(data));
  } catch (err: any) {
    if (err instanceof MovieError) {
      yield put(movieFetchFailedAction());
    }
  }
}
