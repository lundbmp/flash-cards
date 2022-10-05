import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
import logoImg from "../../assets/ExamCram Logo 9.PNG";
import "../../index.css";

const Header = () => {
  const handleLogout = () => {
    Auth.logout();
  };
  return (
    <header className="navbar w-full bg-white px-4 text-center">
      <div on className="container flex">
        <img className="rounded" src={logoImg} alt="" />
        <span className="flex">
          <Link to="/dashboard">Dashboard</Link>
        </span>
        {Auth.loggedIn() ? <button onClick={handleLogout}>Logout</button> : " "}
      </div>
    </header>
  );
};

export default Header;
