import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Navbar";

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1><Dropdown/></h1>
        <Link to="/math">math</Link>
      </div>
    </header>
  );
};

export default Header;
