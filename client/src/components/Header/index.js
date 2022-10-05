import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth"

const Header = () => {
  const handleLogout = () => {
    Auth.logout();
  }
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div on className="container flex-row justify-space-between-lg justify-center align-center">
        <h1>Exam Cram</h1>
        <span className=""><Link to="/dashboard">Dashboard</Link></span>
        <span><Link to="/math">Math</Link></span>
        <span><Link to="/computerscience">Computer Science</Link></span>
        <span><Link to="/history">History</Link></span>
        <span><Link to="/science">Science</Link></span>
        <span><Link to="/literature">Literature</Link></span>
        {Auth.loggedIn() ? <button onClick={handleLogout}>LOGOUT</button> : " "}
      </div>
    </header>
  );
};

export default Header;
