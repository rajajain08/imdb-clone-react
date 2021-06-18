import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeatured } from "../../../../redux/actions/movies";

import "./Featured.css";
import { MovieCard } from "../MovieCard/MovieCard";

const Featured = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.featuredMovies);
  const loading = useSelector((state) => state.movies.isFeaturedLoading);
  const error = useSelector((state) => state.movies.error);
  useEffect(() => {
    dispatch(getFeatured("new"));
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

export default Featured;
