import React from "react";
import Results from "./Results/Results";
import Header from "../Header/Header";

const SearchResult = () => {
  return (
    <div>
      <Header></Header>
      <div className="bg-black flex flex-col px-16">
        <div className="h-14"></div>
        <div className="font-extrabold text-4xl text-yellow-300">
          Searched Movies
          <Results />
        </div>
      </div>
    </div>
  );
};
export default SearchResult;
