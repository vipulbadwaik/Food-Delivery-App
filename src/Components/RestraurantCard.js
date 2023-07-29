import { CDN_URL } from "../utils/constant";

const ResCard = (props) => {

    const {resData} = props;
  
    const{
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData?.data;
  
    return (
      <div className="rescard">
        <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
        <h3>
          {name}
        </h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo/100 + " "}Rs for Two</h4>
        <h4>{deliveryTime} mins</h4>
        <h4>{avgRating} stars</h4>
  
      </div>
    );
  };

  export default ResCard;