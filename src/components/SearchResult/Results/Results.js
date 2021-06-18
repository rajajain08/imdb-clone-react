import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearched } from "../../../redux/actions/movies";

import "./Results.css";
import { MovieCard } from "../../Home/Body/MovieCard/MovieCard";

const Results = (props) => {
  const movies = useSelector((state) => state.movies.searchedMovies);
  const loading = useSelector((state) => state.movies.isSearchLoading);

  console.log(loading);

  if (movies == null || movies.length === 0) {
    return <div>No Results</div>;
  }

  if (!loading)
    return (
      <div>
        <div className="h-8"></div>
        <div className="flex flex-wrap ">
          {movies?.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
        <div className="h-8"></div>
      </div>
    );
  else return <div></div>;
};

export default Results;
