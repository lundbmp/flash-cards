import React from "react";
import { useQuery } from "@apollo/client";

import CardList from "../components/CardList";

import { getCategoryCards } from "../utils/queries";

const CardCategories = ({ category }) => {
  const { loading, error, data } = useQuery(getCategoryCards, {
    variables: { category: category },
  });

  if(loading) return <div>Loading</div>;
  if(error) return `error: ${error}`;

  const cards = data.getCategoryCards;
  
  return (
    <div>
    <CardList cards={cards} />
    </div>
  );
};

export default CardCategories;
