import React, { useState } from "react";
import "../../index.css";

// should be taking in array as a props
const CardList = ({ cards }) => {
  const [viewAnswer, setViewAnswer] = useState(false);

  const handleViewAnswerClick = () => {
    setViewAnswer(!viewAnswer);
  };
  return (
    <div>
      <div className="grid row-1 bg-gradient-to-bl from-blue-500 via-purple-600 to-green-300 w-full h-full">
        <br></br>
        <br></br>
        <div className="h-screen text-center font-poppins flex flex-column flex-wrap justify-center gap-4 overflow-auto">
          {cards.map((card) => (
            <div className="col-span-3 columns-4xs">
              <div className="max-w-[400px] w-96 h-78 mx-auto bg-white shadow-xl shadow-gray-700/100 px-8 pt-6 pb-8 rounded-lg text-center">
                <div>
                  <p className="text-xl font-poppin text-blue-800 underline">
                    {card.title}
                  </p>
                  <p className="text-green-600 font-bold">{card.category}</p>
                  <p className="text-red-800">{card.difficulty}</p>

                  <p className="text-md font-poppin text-black">
                    {card.question}
                  </p>
                  <p className="font-poppin text-gray-600 italic text-sm text-extrabold ">
                    {viewAnswer ? card.answer : "Press Button to View"}
                  </p>
                  <button
                    className="w-full text-sm my-5 py-2 shadow-lg shadow-gray-600/100 bg-gradient-to-r via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 dark:focus:ring-white flex-center text-white font-semibold rounded-md font-poppins"
                    onClick={handleViewAnswerClick}
                  >
                    Answer
                  </button>
                  <p>{card.createdBy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
