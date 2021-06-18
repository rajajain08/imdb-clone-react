import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNew } from "../../../../redux/actions/movies";

import "./NewMovies.css";
import { MovieCard } from "../MovieCard/MovieCard";

const NewMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.newMovies);
  const loading = useSelector((state) => state.movies.isNewLoading);
  const error = useSelector((state) => state.movies.error);
  useEffect(() => {
    dispatch(getNew("Marvel"));
  }, []);

  console.log(loading);

  if (!loading)
    return (
      <div>
        <div className="h-8"></div>
        <div className="flex  flex-row flex-nowrap overflow-x-auto ">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
        <div className="h-8"></div>
      </div>
    );
  else return <div></div>;
};

export default NewMovies;
