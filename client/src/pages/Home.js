import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Navigate } from "react-router-dom";

import { ADD_USER, LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import "../index.css";
// import studyImg from "../assets/globe-img.jpg";

export default function Home() {
  // ######## SIGNUP
  const [signupState, setSignupState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleSignupChange = (event) => {
    const { name, value } = event.target;

    setSignupState({
      ...signupState,
      [name]: value,
    });
  };

  // submit form
  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...signupState },
      });
      Auth.login(data.addUser.token);
    } catch (error) {
      console.log(error);
    }
  };
  // ########### LOGIN
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { err }] = useMutation(LOGIN);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;

    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { ...loginState },
      });
      console.log(data);
      Auth.login(data.login.token);
    } catch (error) {
      console.log(error);
    }
  };

  if (Auth.loggedIn()) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <main>
      <div className="bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600 w-full">
        <p className="p-6 m-6 text-center font-poppins text-5xl font-bold italic leading-normal mt-0 mb-2 text-white tracking-wider">
          Welcome to your Flash Card Creator!
        </p>
        {/* <section className="h-2">
          <img src={studyImg} alt="" />
        </section> */}

        {/* Background styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
          <div className="flex flex-col justify-center">
            <form
              className="max-w-[400px] w-full mx-auto bg-white shadow-xl shadow-gray-700/100 px-8 pt-6 pb-8 rounded-lg"
              onSubmit={handleSignupSubmit}
            >
              {/* Sign Up Form */}
              <h2 className="text-3xl bg-clip-text text-gray-600 font-bold text-center font-poppins">
                SIGN UP
              </h2>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Username</label>
                <input
                  className="rounded-lg mt-2 p-2 border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 focus:outline-none"
                  type="text"
                  name="username"
                  value={signupState.username}
                  onChange={handleSignupChange}
                />
              </div>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Email</label>
                <input
                  className="rounded-lg mt-2 p-2 border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 focus:outline-none"
                  type="Email"
                  name="email"
                  value={signupState.email}
                  onChange={handleSignupChange}
                />
              </div>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Password</label>
                <input
                  className="rounded-lg mt-2 p-2 border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 focus:outline-none"
                  type="password"
                  name="password"
                  value={signupState.password}
                  onChange={handleSignupChange}
                />
              </div>
              <button
                className="w-full text-lg my-5 py-2 shadow-lg shadow-gray-600/100 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:bg-gradient-to-br focus:ring-2 dark:focus:ring-gray-400 flex-center text-white font-semibold rounded-md font-poppins
            "
              >
                Sign Up
              </button>
            </form>
          </div>
          {/* 
        Login Form */}
          <div className="flex flex-col justify-center">
            <form
              className="max-w-[400px] w-full mx-auto bg-white shadow-xl shadow-gray-700/100 px-8 pt-6 pb-8 rounded-lg"
              onSubmit={handleLoginSubmit}
            >
              <h2 className="text-3xl text-gray-600 font-bold text-center font-poppins">
                LOGIN
              </h2>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Email</label>
                <input
                  className="rounded-lg mt-2 p-2 border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 focus:outline-none "
                  type="Email"
                  name="email"
                  value={loginState.email}
                  onChange={handleLoginChange}
                />
              </div>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Password</label>
                <input
                  className="rounded-lg mt-2 p-2 border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 focus:outline-none"
                  type="password"
                  name="password"
                  value={loginState.password}
                  onChange={handleLoginChange}
                />
              </div>
              <button
                className="w-full text-lg my-5 py-2 shadow-lg shadow-gray-600/100 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:bg-gradient-to-br focus:ring-2 dark:focus:ring-gray-400 flex-center text-white font-semibold rounded-md font-poppins
            "
              >
                Login
              </button>
            </form>
          </div>
        </div>
        {/* Footer text */}
        <p className="text-center font-poppins text-white text-lg">
          &copy; 2022 Exam Cram
        </p>
      </div>
    </main>
  );
}

// export default Home;
