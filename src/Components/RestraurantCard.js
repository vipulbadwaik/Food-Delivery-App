import { CDN_URL } from "../utils/constant";

const ResCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,

    costForTwo,
    sla,
  } = resData;

  console.log(resData);

  return (
    <div className=" w-64 h-96  rounded-md m-1 hover:shadow-lg hover:shadow-current hover:text-red-600">
      <img className="w-64 h-52 p-3 " src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-extrabold pl-3">{name}</h3>
      <h4 className="pl-3 font-light text-xs">{cuisines.join(", ")}</h4>
      <h4 className="pl-3 font-medium">{costForTwo + " "}</h4>
      <h4 className="pl-3 font-medium">{sla.deliveryTime} mins</h4>
      {avgRating && <h4 className="pl-3 font-medium">{avgRating} stars</h4>}
    </div>
  );
};

export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
