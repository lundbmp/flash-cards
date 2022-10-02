import React from "react";

const Card = (props) => {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.category}</p>
        <p>{props.difficulty}</p>
      </div>
      <h3>{props.question}</h3>
      <p>{props.answer}</p>
      <button>See Answer</button>
      <p>{props.createdBy}</p>
    </div>
  );
};

export default Card;
