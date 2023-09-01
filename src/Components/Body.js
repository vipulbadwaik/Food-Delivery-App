import ResCard from "./RestraurantCard";
import resObj from "../utils/MockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState([]);

  const [filterRes, setFilterRes] = useState([]);

  const [searchRestra, setSearchRestra] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.968428545674225&lng=73.0234394967556&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestraunt(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(listOfRestraunt);

  //Conditional Rendering

  return listOfRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-area">
          <input
            type="text"
            className="search-inpt"
            value={searchRestra}
            onChange={(e) => {
              setSearchRestra(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
            const filteredList = listOfRestraunt.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilterRes(filteredList);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="Restra">
        {filterRes.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant?.info?.id}>
            {" "}
            <ResCard key={restaurant?.info.id} resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
