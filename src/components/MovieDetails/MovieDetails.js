import React from "react";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const selectedMovies = useSelector((state) => state.movies.movieDetails);
  console.log(selectedMovies);
  return (
    <div className="bg-black flex flex-col px-16">
      <div className="h-14"></div>
      <div className="font-extrabold text-4xl text-yellow-300 flex justify-center">
        <div>{selectedMovies?.Title}</div>
        <div className="h-14"></div>
      </div>
      <div className="flex justify-center">
        <img
          src={selectedMovies?.Poster}
          alt="poster"
          className="h-72 w-52 mb-8"
        />
      </div>
    </div>
  );
};
export default MovieDetails;
