import React from "react";
import { Link } from "react-router-dom";


import Auth from "../../utils/auth"

const Header = () => {
  const handleLogout = () => {
    Auth.logout();
  }
  return (
    <header className="flex space-x-4 justify-around items-center justify-center items-center font-poppins  hover:bg-gray-700 mx-auto">
      <div on className="flex space-x-10 text-xl dark:text-white">
        <h1>Exam Cram</h1>
        
        <span className="flex px-8 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white font-poppins"><Link to="/math">Math</Link></span>
        <span className="flex px-8 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white font-poppins"><Link to="/computerscience">Computer Science</Link></span>
        <span className="flex px-8 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white font-poppins"><Link to="/history">History</Link></span>
        <span className="flex px-8 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white font-poppins"><Link to="/science">Science</Link></span>
        <span className="flex px-8 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white font-poppins"><Link to="/literature">Literature</Link></span>
        <span className="flex px-8 justify-content text-black bg-blue-700 rounded hover:text-blue md:bg-transparent  md:p-0 dark:text-white"><Link to="/dashboard">Dashboard</Link></span>
        {Auth.loggedIn() ? <button onClick={handleLogout}>LOGOUT</button> : " "}
        
      </div>
    </header>
  );
};

export default Header;
