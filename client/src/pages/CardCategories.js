import React from "react";
import { useQuery } from "@apollo/client";

import CardList from "../components/CardList";
import "../index.css";

import { GET_CATEGORY_CARDS } from "../utils/queries";

const CardCategories = ({ category }) => {
  const { loading, error, data } = useQuery(GET_CATEGORY_CARDS, {
    variables: { category: category },
  });

  if (loading) return <div>Loading</div>;
  if (error) return `error: ${error}`;

  const cards = data.getCategoryCards;

  return (
    <div className="grid row-1 w-full h-full p-28 bg-slate-200 bg-gradient-to-tl from-gray-300 via-gray-400 to-gray-200">
      <CardList cards={cards} />
    </div>
  );
};

export default CardCategories;
