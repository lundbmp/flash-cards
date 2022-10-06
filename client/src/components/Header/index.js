import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
// import logoImg from "../../assets/ExamCram Logo 9.PNG";
import "../../index.css";

const Header = () => {
  const handleLogout = () => {
    Auth.logout();
  };
  return (
    <div className="w-full bg-gradiant-to-bl flex flex-wrap gap-4 overflow-auto">
      <p className="py-4 font-bold text-transparent text-6xl bg-clip-text font-poppin bg-gradient-to-r from-blue-500 via-blue-500 to-purple-600">
        CramExam
      </p>
      <div className="justify-center flex flex-wrap gap-4">
        <Link
          to="/dashboard"
          className="font-bold flex flex-wrap py-10 text-gray-600 font-poppins text-base"
        >
          Dashboard
        </Link>
        {Auth.loggedIn() ? (
          <button
            className="font-bold flex flex-wrap py-10 text-gray-600 font-poppins text-base"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Header;
