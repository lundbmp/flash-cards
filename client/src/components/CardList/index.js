import React from "react";
import Card from "../Card";
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
    <div>
      {cards.map((card) => (
        <div>
          <div>
            <h2>{card.title}</h2>
            <p>{card.category}</p>
            <p>{card.difficulty}</p>
          </div>
          <h3>{card.question}</h3>
          <p>{card.answer}</p>
          <button>See Answer</button>
          <p>{card.createdBy}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
