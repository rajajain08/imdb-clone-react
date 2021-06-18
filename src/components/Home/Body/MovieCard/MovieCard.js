import React from "react";

export const MovieCard = (props) => {
  return (
    <div className="flex-grow-0 flex-shrink-0 flex-auto">
      <img
        src={props?.movie?.Poster}
        alt="poster"
        className="h-64 w-48 mr-8 mb-8"
      />
    </div>
  );
};
