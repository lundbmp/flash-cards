// // import CardForm from "../components/CardForm";
// import React from "react";
// import CardList from "../components/CardList";

// const Dashboard = () => {
//   return (
//     <div>
//       <div className="flex-row mb-3">
//         <h2 className="bg-dark text-secondary p-3 display-inline-block">
//           {/* Viewing <usernames>'s Dashboard. */}Goodbye World.
//         </h2>
//       </div>

//       <div className="flex-row justify-space-between mb-3">
//         <div className="col-12 mb-3 col-lg-8"></div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import "../index.css";

export default function Dashboard() {
  return (
    <main>
      <div className="bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 h-screen">
          <div className="flex flex-col justify-center">
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
                    <option value="CS">Computer Science</option>
                    <option value="HS">History</option>
                    <option value="LIT">Literature</option>
                    <option value="MTH">Math</option>
                    <option value="SCI">Science</option>
                  </select>
                </div>
                {/* </div> */}
              </div>
              <div className="flex flex-col text-gray-600 py-2 font-poppins">
                <label>Question</label>
                <input
                  className="rounded-lg mt-6 p-2 border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 focus:outline-none"
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
                    <option value="1">Beginner</option>
                    <option value="2">Easy</option>
                    <option value="3">Normal</option>
                    <option value="4">Hard</option>
                    <option value="5">Expert</option>
                  </select>
                </div>
              </div>
              <button
                className="w-full text-lg my-5 py-2 shadow-lg shadow-gray-600/100 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:bg-gradient-to-br focus:ring-2 dark:focus:ring-gray-400 flex-center text-white font-semibold rounded-md font-poppins
            "
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
