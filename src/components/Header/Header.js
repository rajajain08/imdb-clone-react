import React from "react";
import logo from "../../assets/images/logo.svg";
import "./Header.css";
import Menu from "./Menu/Menu";
import SearchBar from "./SearchBar/SearchBar";
import SignIn from "./SignIn/SignIn";

const Header = () => {
  const onMenuClick = () => {
    console.log("menu clicked");
  };
  return (
    <div>
      <div className="basic-header flex flex-row  h-14 px-16">
        <img src={logo} className="h-8 rounded-sm" alt="logo" />
        <Menu onMenuClick={onMenuClick} />
        <SearchBar />
        <SignIn />
      </div>
    </div>
  );
};

export default Header;
