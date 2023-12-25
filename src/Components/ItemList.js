import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (items) => {
    //Dispatch an action
    dispatch(addItem(items));
  };

  return (
    <div className="">
      {items.map((items) => (
        <div
          key={items.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{items.card.info.name}</span>
              <span className="font-bold text-red-900">
                - ₹{" "}
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-xs">{items.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute pt-4">
              <button
                className="p-2 mx-12 my-14 text-sm rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(items)}
              >
                Add +
              </button>
            </div>

            <img src={CDN_URL + items.card.info.imageId} className="w-40 h-28" alt="Food"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
