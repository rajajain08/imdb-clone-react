import * as types from "../types";

export function getFeatured(movieName) {
  return {
    type: types.GET_FEATURED_REQUESTED,
    isFeaturedLoading: true,
    name: movieName,
  };
}
export function getFeatureSuccess(moviesResult) {
  return { type: types.GET_FEATURED_SUCCESS, featuredMovies: moviesResult };
}
export function getFeatureError(message) {
  return { type: types.GET_FEATURED_FAILED, message: message };
}

export function getNew(movieName) {
  return {
    type: types.GET_NEW_REQUESTED,
    isNewLoading: true,
    name: movieName,
  };
}
export function getNewSuccess(moviesResult) {
  return { type: types.GET_NEW_SUCCESS, newMovies: moviesResult };
}
export function getNewError(message) {
  return { type: types.GET_NEW_FAILED, message: message };
}

export function getSearched(movieName) {
  return {
    type: types.GET_SEARCH_REQUESTED,
    isSearchLoading: true,
    name: movieName,
  };
}
export function getSearchedSuccess(moviesResult) {
  return { type: types.GET_SEARCH_SUCCESS, searchedMovies: moviesResult };
}

export function getSearchedError(message) {
  return { type: types.GET_SEARCH_FAILED, message: message };
}

export function setSearchValue(value) {
  return { type: types.SET_SEARCH_VALUE, searchValue: value };
}

export function getDetails(movieId) {
  return {
    type: types.GET_DETAILS_REQUESTED,
    isDetailsLoading: true,
    movieId: movieId,
  };
}
export function getDetailsSuccess(movieDetails) {
  return { type: types.GET_DETAILS_SUCCESS, movieDetails: movieDetails };
}
export function getDetailsError(message) {
  return { type: types.GET_DETAILS_FAILED, message: message };
}
