import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDetails } from "../../../../redux/actions/movies";

export const MovieCard = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div
      className="flex-grow-0 flex-shrink-0 flex-auto"
      onClick={(event) => {
        event.preventDefault();
        history.push("/movieDetails");
        dispatch(getDetails(props?.movie?.imdbID));
      }}
    >
      <img
        src={props?.movie?.Poster}
        alt="poster"
        className="h-64 w-48 mr-8 mb-8"
      />
    </div>
  );
};
