import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
// import logoImg from "../../assets/ExamCram Logo5.PNG";

const Header = () => {
  const handleLogout = () => {
    Auth.logout();
  };
  return (
    <header className="navbar w-full bg-white px-0">
      <div on className="container">
        {/* <img className="rounded justify-center" src={logoImg} alt="" /> */}
        <h1>Exam Cram</h1>
        <span className="">
          <button>
            <Link to="/dashboard">Dashboard</Link>
          </button>
        </span>
        <span>
          <Link to="/math">Math</Link>
        </span>
        <span>
          <Link to="/computerscience">Computer Science</Link>
        </span>
        <span>
          <Link to="/history">History</Link>
        </span>
        <span>
          <Link to="/science">Science</Link>
        </span>
        <span>
          <Link to="/literature">Literature</Link>
        </span>
        {Auth.loggedIn() ? <button onClick={handleLogout}>LOGOUT</button> : " "}
      </div>
    </header>
  );
};

export default Header;
