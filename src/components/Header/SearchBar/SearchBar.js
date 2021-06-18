import React from "react";
import "./SearchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { getSearched, setSearchValue } from "../../../redux/actions/movies";
import { useHistory } from "react-router-dom";

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.movies.searchValue);
  const history = useHistory();
  return (
    <div className="w-full">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          history.push("/search");
          dispatch(getSearched(searchValue));
        }}
      >
        <div className="flex flex-row">
          <div className="w-10 bg-white rounded-l-md flex flex-row all p-2 text-xs font-bold">
            ALL
          </div>
          <input
            className="w-full p-1 outline-none rounded-r-md focus:border-yellow-300 border-2 border-white"
            placeholder="Search IMDb"
            type="text"
            onChange={(event) => {
              dispatch(setSearchValue(event.target.value));
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
