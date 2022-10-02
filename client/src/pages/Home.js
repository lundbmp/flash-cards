import React from "react";
import "../index.css";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
          <div className="flex flex-col justify-center">
            <form className="max-w-[400px] w-full mx-auto bg-white shadow-xl shadow-gray-700/100 px-8 pt-6 pb-8 rounded-lg">
              <h2 className="text-3xl bg-clip-text text-gray-500/80 font-bold text-center">
                SIGN UP
              </h2>
              <div className="flex flex-col text-gray-600  py-2">
                <label>Email</label>
                <input
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label>Password</label>
                <input
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="password"
                />
              </div>
              <button
                id="btn"
                className="w-full my-5 py-2 shadow-lg shadow-gray-600/100 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-cyan-800 flex-center text-white font-semibold rounded-md
            "
              >
                Sign Up
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <form className="max-w-[400px] w-full mx-auto bg-white shadow-xl shadow-gray-700/100 px-8 pt-6 pb-8 rounded-lg">
              <h2 className="text-3xl text-gray-500/80 font-bold text-center">
                LOGIN
              </h2>
              <div className="flex flex-col text-gray-400 py-2">
                <label>Email</label>
                <input
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label>Password</label>
                <input
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="password"
                />
              </div>
              <button
                className="w-full my-5 py-2 shadow-lg shadow-gray-600/100 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-cyan-800 flex-center text-white font-semibold rounded-md
            "
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

// export default Home;
