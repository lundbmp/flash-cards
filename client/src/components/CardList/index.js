import React from "react";
// import Card from "../Card";
import "../../index.css";
// const cards = [
//   {
//     title: "kjkfljsdkljf",
//     category: "Math",
//     difficulty: "beginner",
//     question: "what is ?",
//     answer: "this",
//     createdBy: "myself",
//   },
//   {
//     title: "kjkfljsdkljf",
//     category: "Math",
//     difficulty: "beginner",
//     question: "what is ?",
//     answer: "this",
//     createdBy: "myself",
//   },
//   {
//     title: "kjkfljsdkljf",
//     category: "Math",
//     difficulty: "beginner",
//     question: "what is ?",
//     answer: "this",
//     createdBy: "myself",
//   },
//   {
//     title: "kjkfljsdkljf",
//     category: "Math",
//     difficulty: "beginner",
//     question: "what is ?",
//     answer: "this",
//     createdBy: "myself",
//   },
// ];

// should be taking in array as a props
const CardList = ({ cards }) => {
  return (
    <div className="grid row-1 bg-gray-200">
      <div className="h-screen text-center font-poppins flex flex-column">
        {cards.map((card) => (
          <div className="col-span-3 columns-4xs">
            <div className="max-w-[400px] w-full mx-auto bg-white shadow-xl shadow-gray-700/100 px-8 pt-6 pb-8 rounded-lg text-center">
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
                  {card.answer}
                </p>
                <button className="w-full text-sm my-5 py-2 shadow-lg shadow-gray-600/100 bg-gradient-to-r via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 dark:focus:ring-white flex-center text-white font-semibold rounded-full font-poppins">
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
