import React from "react";
import "./Body.css";
import Featured from "./Featured/Featured";
import NewMovies from "./NewMovies/NewMovies";

const Body = () => {
  return (
    <div className="bg-black h-auto flex flex-col px-16">
      <div className="h-14"></div>
      <div className="font-extrabold text-4xl text-yellow-300">
        Featured Today
        <Featured />
      </div>
      <div className="font-extrabold text-4xl text-yellow-300">
        New Arrivals
        <NewMovies />
      </div>
    </div>
  );
};
export default Body;
