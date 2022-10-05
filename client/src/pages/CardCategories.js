import React from "react";
import { useQuery } from "@apollo/client";

import CardList from "../components/CardList";
import "../index.css";
import studyImg from "./../assets/study-img.jpg";

import { GET_CATEGORY_CARDS } from "../utils/queries";

const CardCategories = ({ category }) => {
  const { loading, error, data } = useQuery(GET_CATEGORY_CARDS, {
    variables: { category: category },
  });

  if (loading) return <div>Loading</div>;
  if (error) return `error: ${error}`;

  const cards = data.getCategoryCards;

  return (
    <div className="grid row-1 w-full h-full p-28" img class={studyImg} alt="">
      <CardList cards={cards} />
    </div>
  );
};

export default CardCategories;
