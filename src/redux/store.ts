import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import movieReducer from "./movie/reducer";
import movieSaga from "./movie/sagas";

// SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

// STORE
const store = createStore(
  combineReducers({ movie: movieReducer }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(movieSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
