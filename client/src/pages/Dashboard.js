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

export default function Dashboard() {
  return (
    <main>
      <div className="grid sm:grid-cols-1 sm:grid-cols-1 h-screen">
        <div className="bg-gray-800 flex flex-col justify-center">
          <form className="max-w-[400px] w-96 mx-auto bg-gray-900 p-8 px-8 rounded-lg">
            <h2 className="text-4xl dark:text-white font-bold text-center">
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
              className="w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg
            "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
