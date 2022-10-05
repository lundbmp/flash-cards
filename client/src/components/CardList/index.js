import React, { useState } from "react";
import "../../index.css";
import studyImg from "../../assets/study-pic.jpg";

// should be taking in array as a props
const CardList = ({ cards }) => {
  const [viewAnswer, setViewAnswer] = useState(false);

  const handleViewAnswerClick = () => {
    setViewAnswer(!viewAnswer);
  };
  return (
    <div className="grid row-1 bg-gradient-to-tl from-gray-300 via-gray-200 to-gray-100 p-28">
      {/* <img src={studyImg} alt="" /> */}
      <div className="h-screen text-center font-poppins flex flex-column flex-wrap justify-center gap-4 overflow-auto">
        {cards.map((card) => (
          <div className="col-span-3 columns-4xs">
            <div className="max-w-[400px] w-96 h-64 mx-auto bg-white shadow-xl shadow-gray-700/100 px-8 pt-6 pb-8 rounded-lg text-center">
              <div>
                <p className="text-xl font-poppin text-cyan-800 underline">
                  {card.title}
                </p>
                <p>{card.category}</p>
                <p>{card.difficulty}</p>

                <p className="text-md font-poppin text-black-600">
                  {card.question}
                </p>
                <p className="text-md font-poppin text-black-600">
                  {viewAnswer ? card.answer : "Click to view answer."}
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
  );
};

export default CardList;
