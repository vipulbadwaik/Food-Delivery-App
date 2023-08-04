import ResCard from "./RestraurantCard";
import resObj from "../utils/MockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestraunt,setListOfRestraunt] = useState(resObj);
    
 


    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
            console.log("Button Clicked");
            const filteredList = listOfRestraunt.filter(
              (res) => res.data.avgRating>4
            );
            setListOfRestraunt(filteredList);
          }}
          >Top Rated restaurant</button>
        </div>
        <div className="Restra">
         {
          listOfRestraunt.map((restaurant) => (<ResCard key={restaurant.data.id} resData={restaurant}/>))
         }
          
        </div>
      </div>
    );
  };

  export default Body;