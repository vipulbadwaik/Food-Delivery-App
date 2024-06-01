import ResCard, { withPromotedLabel } from "./RestraurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState([]);

  const [filterRes, setFilterRes] = useState([]);

  const [searchRestra, setSearchRestra] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(ResCard);

  useEffect(() => {
    fetchData();
    console.log("Welcome!!!");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9684285&lng=73.0234408&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //console.log(json);
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //console.log(listOfRestraunt);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Dude you are offline.</h1>;

  //Conditional Rendering


  return listOfRestraunt?.length === 0 || listOfRestraunt=== 'undefined' ? (

 
    <Shimmer />
  ) : (
    <div className=" overflow-hidden mt-20">
      <div className="flex p-2 justify-center">
        <div className="flex ">
          <input
            type="text"
            className="border-2 rounded-l-md "
            value={searchRestra}
            onChange={(e) => {
              setSearchRestra(e.target.value);
            }}
          />
          <button
            className="bg-blue-800 font-medium text-base px-2 rounded-r-lg text-white"
            onClick={() => {
              console.log(searchRestra);

              const filterRestra = listOfRestraunt.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchRestra.toLowerCase())
              );
              setFilterRes(filterRestra);
            }}
          >
            Search🔍
          </button>
        </div>
        <button
          className="ml-10 font-bold bg-red-700 px-3 py-1 rounded-md  text-white"
          onClick={() => {
            console.log("Button Clicked");
            const filteredList = listOfRestraunt.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setFilterRes(filteredList);
          }}
        >
          Top Rated ⭐
        </button>
      </div>
      <div className="flex flex-wrap items-center mx-52">
        {filterRes?.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant?.info?.id}>
            {" "}
            {restaurant?.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <ResCard key={restaurant?.info?.id} resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
