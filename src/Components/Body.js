import ResCard from "./RestraurantCard";
import resObj from "../utils/MockData";

const Body = () => {
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
            console.log("Button Clicked");
          }}
          >Top Rated restaurant</button>
        </div>
        <div className="Restra">
         {
          resObj.map((restaurant) => (<ResCard key={restaurant.data.id} resData={restaurant}/>))
         }
          
        </div>
      </div>
    );
  };

  export default Body;