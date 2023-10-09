import { CDN_URL } from "../utils/constant";

const ItemList = ({items}) =>{

  console.log(items);

   return(
      <div>
   
            {items.map((items) =>(
                <div
                key={items.card.info.id}
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                  
                  <div className="w-9/12">
                 <div className="py-2">
                   <span>
                     {items.card.info.name}
                   </span>
                   <span>
                     - ₹ {items.card.info.price ? items.card.info.price / 100 : items.card.info.defaultPrice/100}
                   </span>
                    
                 </div>

                 <p className="text-xs">{items.card.info.description}</p>


                </div>
                <div className="w-3/12 p-4">

                  <div className="absolute">
                    <button className="p-2 mx-12 my-14 text-sm rounded-lg bg-black text-white shadow-lg">
                      Add +
                    </button>
                    </div>

                  <img src={CDN_URL+items.card.info.imageId} className="w-40" />

                  </div>
                </div>
            ))}
       
      </div>
   );
}

export default ItemList;