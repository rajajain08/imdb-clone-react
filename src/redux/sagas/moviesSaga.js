import { call, put, takeEvery } from "redux-saga/effects";
import * as type from "../types";
import axios from "axios";
import {
  getFeatureSuccess,
  getFeatureError,
  getNewSuccess,
  getNewError,
  getSearchedSuccess,
  getSearchedError,
  getDetailsSuccess,
  getDetailsError,
} from "../actions/movies";

const moviesApiUrl = "http://www.omdbapi.com/";
function* getFeaturedMovies(action) {
  try {
    const movies = yield call(getMovies, action.name);
    yield put(getFeatureSuccess(movies.Search));
  } catch (err) {
    yield put(getFeatureError(err.message));
  }
}
function* getNewMovies(action) {
  try {
    const movies = yield call(getMovies, action.name);
    yield put(getNewSuccess(movies.Search));
  } catch (err) {
    yield put(getNewError(err.message));
  }
}
function* getSearchedMovies(action) {
  try {
    const movies = yield call(getMovies, action.name);
    yield put(getSearchedSuccess(movies.Search));
  } catch (err) {
    yield put(getSearchedError(err.message));
  }
}
function* getMovieDetails(action) {
  try {
    const movies = yield call(getDetails, action.movieId);
    yield put(getDetailsSuccess(movies));
  } catch (err) {
    yield put(getDetailsError(err.message));
  }
}

function getMovies(movieName) {
  return axios
    .get(moviesApiUrl, {
      params: {
        s: movieName,
        apiKey: "53454e1d",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

function getDetails(movieId) {
  return axios
    .get(moviesApiUrl, {
      params: { i: movieId, apiKey: "53454e1d" },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

function* moviesSaga() {
  yield takeEvery(type.GET_FEATURED_REQUESTED, getFeaturedMovies);
  yield takeEvery(type.GET_NEW_REQUESTED, getNewMovies);
  yield takeEvery(type.GET_SEARCH_REQUESTED, getSearchedMovies);
  yield takeEvery(type.GET_DETAILS_REQUESTED, getMovieDetails);
}
export default moviesSaga;
