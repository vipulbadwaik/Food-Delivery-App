import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  //console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //   console.log(name);
  // console.log(resInfo);
  console.log(categories);

  return (
    <div className="overflow-hidden mt-20  ">
    <div className=" w-6/12 mx-auto  my-6 ">
    <h1 className="font-semibold  text-2xl mb-2 font-sans  ">
        {name}
      </h1>
      <p className="font-light from-stone-500 text-sm ">
        {cuisines.join(", ")}
      </p>
      <div className="h-1 border-dotted border-slate-300  border-b-2 mt-3">

      </div>
     <p className="mt-3 font-bold">
      {costForTwoMessage}
     </p>
    </div>

  
     
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
