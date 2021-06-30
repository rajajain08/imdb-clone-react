import * as type from "../types";

const initialState = {
  isFeaturedLoading: true,
  isNewLoading: true,
  isSearchLoading: true,
  searchedMovies: [],
  featuredMovies: [],
  newMovies: [],
  searchValue: "",
  error: null,
  isDetailsLoading: true,
  movieDetails: null,
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case type.GET_FEATURED_REQUESTED:
      return {
        ...state,
        isFeaturedLoading: true,
      };
    case type.GET_FEATURED_SUCCESS:
      return {
        ...state,
        featuredMovies: action.featuredMovies,
        isFeaturedLoading: false,
      };
    case type.GET_FEATURED_FAILED:
      return {
        ...state,
        isFeaturedLoading: false,
        error: action.message,
      };

    case type.GET_NEW_REQUESTED:
      return {
        ...state,
        isNewLoading: true,
      };
    case type.GET_NEW_SUCCESS:
      return {
        ...state,
        newMovies: action.newMovies,
        isNewLoading: false,
      };
    case type.GET_NEW_FAILED:
      return {
        ...state,
        isNewLoading: false,
        error: action.message,
      };
    case type.GET_SEARCH_REQUESTED:
      return {
        ...state,
        isSearchLoading: true,
      };
    case type.GET_SEARCH_SUCCESS:
      return {
        ...state,
        searchedMovies: action.searchedMovies,
        isSearchLoading: false,
      };
    case type.GET_SEARCH_FAILED:
      return {
        ...state,
        isSearchLoading: false,
        error: action.message,
      };
    case type.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue,
      };

    case type.GET_DETAILS_REQUESTED:
      return {
        ...state,
        isDetailsLoading: true,
      };
    case type.GET_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.movieDetails,
        isDetailsLoading: false,
      };
    case type.GET_DETAILS_FAILED:
      return {
        ...state,
        isDetailsLoading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
