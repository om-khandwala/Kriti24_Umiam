import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-part">
        <img src="logo.png" alt="Logo" />

        {/* Columns */}
        <h4>Column 1</h4>
        <h4>Column 2</h4>
        <h4>Column 3</h4>
      </div>
      {/* Search bar */}
      <div className="search-bar">
        <input type="text" />
      </div>
    </div>
  );
};

export default Navbar;
