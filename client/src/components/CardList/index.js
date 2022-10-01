import React from "react";
import Card from "../Card";

// should be taking in array as a props
const CardList = ({ cards }) => {
    return (
        <div>
            {
                cards.map((card) => (
                    <Card
                    title={card.title}
                    category={card.category}
                    difficulty={card.difficulty}
                    question={card.question}
                    answer={card.answer}
                    createdBy={card.createdBy} />
                ))
            }
        </div>
    );
}

export default CardList;