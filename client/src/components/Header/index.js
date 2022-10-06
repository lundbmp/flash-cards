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
    <div className="w-full bg-white px-4 py-8 items-end  flex flex-column flex-wrap justify-center gap-4 overflow-auto text-lg">
      <img className="rounded" src={logoImg} alt="" />
      <div className="w-full bg-white px-4 py-8 items-end  flex flex-column flex-wrap justify-center gap-4 overflow-auto">
        <Link to="/dashboard">Dashboard</Link>
        {Auth.loggedIn() ? <button onClick={handleLogout}>Logout</button> : " "}
      </div>
    </div>
  );
};

export default Header;
