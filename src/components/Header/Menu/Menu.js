import React from "react";
import "./Menu.css";

const Menu = ({ onMenuClick }) => {
  return (
    <div className="menu font-medium text-base  m-8" onClick={onMenuClick}>
      Menu
    </div>
  );
};

export default Menu;
