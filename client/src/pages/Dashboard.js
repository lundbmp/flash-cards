// // import CardForm from "../components/CardForm";
import React from "react";
import CardList from "../components/CardList";
import { GET_USER_CARDS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import "../index.css";

export default function Dashboard() {
  const { loading, error, data } = useQuery(GET_USER_CARDS);

  if (loading) return <div>Loading</div>;
  if (error) return `error: ${error}`;

  const cards = data.getUserCards;
  return (
    <main>
      {/* Background styling */}
      <div className="bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600 w-full h-full">
        <p className="p-6 m-6 text-center font-poppins text-5xl font-bold italic leading-normal mt-0 mb-2 text-white tracking-wider">
          Welcome to your Dashboard!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 h-screen">
          <div className="flex flex-col justify-center">
            {/* Flash Card Form */}
            <form className="max-w-[400px] w-full mx-auto bg-white shadow-xl shadow-gray-700/100 px-8 pt-6 pb-8 rounded-lg">
              <h2 className="text-3xl bg-clip-text text-gray-600 font-bold text-center font-poppins">
                Flash Card
              </h2>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Category</label>
                <div class="flex justify-center">
                  {/* <div class="mb-3 xl:w-96"> */}
                  <select
                    class="form-select rounded-lg mt-2 p-2 w-full border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 transition ease-in-out"
                    aria-label="Default select example"
                  >
                    <option selected>Select Area of Study</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="History">History</option>
                    <option value="Literature">Literature</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                  </select>
                </div>
                {/* </div> */}
              </div>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Title</label>
                <input
                  className="rounded-lg mt-2 p-2 border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Question</label>
                <input
                  className="rounded-lg mt-2 p-2 border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Answer</label>
                <input
                  className="rounded-lg mt-2 p-2 border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Difficulty</label>
                <div class="flex justify-center">
                  <select
                    className="form-select rounded-lg mt-2 p-2 w-full border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 transition ease-in-out"
                    aria-label="Default select example"
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
        <div>
          <CardList cards={cards} />
        </div>
      </div>
    </main>
  );
}
