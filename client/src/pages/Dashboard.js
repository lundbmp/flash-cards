// // import CardForm from "../components/CardForm";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import CardList from "../components/CardList";

import { GET_USER_CARDS } from "../utils/queries";
import { ADD_CARD } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import "../index.css";
// import { coverImg } from "../assets/desk-img.jpg";

export default function Dashboard() {
  const [createCardState, setCreateCardState] = useState({
    title: "",
    question: "",
    answer: "",
    category: "",
    difficulty: "",
  });

  const [createCard, { err }] = useMutation(ADD_CARD);

  // getting current user cards
  const { loading, error, data } = useQuery(GET_USER_CARDS);

  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }

  if (loading) return <div>Loading</div>;
  if (error) return `error: ${error}`;

  const cards = data.getUserCards;

  // creating card
  const handleCreateCardChange = (event) => {
    const { name, value } = event.target;

    setCreateCardState({
      ...createCardState,
      [name]: value,
    });
  };

  const handleCreateCardSubmit = async (event) => {
    event.preventDefault();
    try {
      await createCard({
        variables: { ...createCardState },
      });

      setCreateCardState({
        title: "",
        question: "",
        answer: "",
        category: "",
        difficulty: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      {/* Background styling */}
      <div className="bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600 w-full h-full ">
        <div className="py-10 text-center">
          <p className="py-4 m-4 font-bold italic text-transparent text-6xl bg-clip-text font-poppin tracking-wider bg-gradient-to-tl from-gray-100/50 via-gray-100 text-center justify-center">
            Welcome to your Dashboard!
          </p>
          {/* card category buttons */}
          <p className="italic text-extrabold font-poppins text-lg text-white">
            Select a Category Below to Study
          </p>
          <br></br>
          <br></br>
          <span className="px-8">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-2 overflow-hidden text-base font-medium font-poppin text-gray-600 rounded-lg group bg-gradient-to-br from-gray-400 via-gray-200 shadow-md shadow-gray-600/100">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0 shadow-gray-600/100">
                <Link to="/computerscience">Computer Science</Link>
              </span>
            </button>
          </span>

          <span className="px-8">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium font-poppin text-gray-600 rounded-lg group bg-gradient-to-br from-gray-400 via-gray-200 shadow-md shadow-gray-600/100">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0 shadow-gray-600/100">
                <Link to="/history">History</Link>
              </span>
            </button>
          </span>

          <span className="px-8">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium font-poppin text-gray-600 rounded-lg group  bg-gradient-to-tl from-gray-400 via-gray-200 shadow-md shadow-gray-600/100">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0">
                <Link to="/literature">Literature</Link>
              </span>
            </button>
          </span>

          <span className="px-8">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium font-poppin text-gray-600 rounded-lg group bg-gradient-to-tl from-gray-400 via-gray-200 shadow-md shadow-gray-600/100">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0 shadow-gray-600/100">
                <Link to="/math">Math</Link>
              </span>
            </button>
          </span>

          <span className="px-8">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium font-poppin text-gray-600 rounded-lg group bg-gradient-to-br from-gray-400 via-gray-200 shadow-md shadow-gray-600/100">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0 shadow-gray-600/100">
                <Link to="/science">Science</Link>
              </span>
            </button>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 h-screen">
          <div className="flex flex-col justify-center">
            {/* Flash Card Form */}
            <form
              className="max-w-[400px] w-full mx-auto bg-white shadow-xl shadow-gray-700/100 px-8 pt-6 pb-8 rounded-lg"
              onSubmit={handleCreateCardSubmit}
            >
              <h2 className="text-3xl bg-clip-text text-gray-600 font-bold text-center font-poppins">
                Flash Card
              </h2>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Category</label>
                <div className="flex justify-center">
                  <select
                    className="form-select rounded-lg mt-2 p-2 w-full border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 transition ease-in-out"
                    aria-label="Default select example"
                    name="category"
                    value={createCardState.category}
                    onChange={handleCreateCardChange}
                  >
                    <option selected>Select Area of Study</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="History">History</option>
                    <option value="Literature">Literature</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Title</label>
                <input
                  className="rounded-lg mt-2 p-2 border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 focus:outline-none"
                  type="text"
                  name="title"
                  value={createCardState.title}
                  onChange={handleCreateCardChange}
                />
              </div>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Question</label>
                <input
                  className="rounded-lg mt-2 p-2 border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 focus:outline-none"
                  type="text"
                  name="question"
                  value={createCardState.question}
                  onChange={handleCreateCardChange}
                />
              </div>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Answer</label>
                <input
                  className="rounded-lg mt-2 p-2 border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 focus:outline-none"
                  type="text"
                  name="answer"
                  value={createCardState.answer}
                  onChange={handleCreateCardChange}
                />
              </div>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Difficulty</label>
                <div class="flex justify-center">
                  <select
                    className="form-select rounded-lg mt-2 p-2 w-full border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 transition ease-in-out"
                    aria-label="Default select example"
                    name="difficulty"
                    value={createCardState.difficulty}
                    onChange={handleCreateCardChange}
                  >
                    <option selected>Select Skill Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Easy">Easy</option>
                    <option value="Normal">Normal</option>
                    <option value="Hard">Hard</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </div>
              <button
                className="w-full text-sm my-5 py-2 shadow-lg shadow-gray-600/100 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:bg-gradient-to-br focus:ring-2 dark:focus:ring-gray-400 flex-center text-white font-semibold rounded-md font-poppins
            "
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* list of users cards */}
      <div>
        <CardList cards={cards} />
      </div>
    </main>
  );
}
