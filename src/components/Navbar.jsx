import React from "react";
import { Link } from "react-router-dom";
// import Createbook from "./Delete";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Navbar</h2>
      <nav className="nav-link">
        <Link to="/create">Createbook</Link>
        <Link to="/read">Read page</Link>
        <Link to="/update">Update page</Link>
        <Link to="/delete">Delete page</Link>
      </nav>
    </div>
  );
};

export default Navbar;
