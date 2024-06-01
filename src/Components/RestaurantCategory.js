import { useState } from "react";
import ItemList from "./ItemList";
import { SquareArrowDown } from 'lucide-react';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //console.log(data);
  const handleClick = () => {
    setShowIndex();
   
  };
  return (
    <div className="">
      <div className="w-6/12 mx-auto my-4 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <SquareArrowDown fill="blue" color="white"/>
          </span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
