import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {



  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories);

   

  return (
    <div className="text-center overflow-hidden">
      <h1 className="font-bold my-6 text-2xl text-white">{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <p className="font-bold text-white">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category,index) => <RestaurantCategory key={category?.card?.card.title} data = {category?.card?.card}
      showItems={index === showIndex ? true : false}
      setShowIndex = {() => setShowIndex(index)}
      />)}
      
    </div>
  );
};

export default RestaurantMenu;
