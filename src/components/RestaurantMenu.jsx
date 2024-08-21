import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

     const { resId } = useParams();

     const resInfo = useRestaurantMenu(resId);

     const [showIndex, setShowIndex] = useState(0)

     if (resInfo === null) return <Shimmer />;

     const { name, cuisines, costForTwoMessage, sla, totalRatingsString, locality, areaName, avgRatingString, feeDetails } = resInfo?.cards[2]?.card?.card?.info

     const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

     const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

     console.log(categories);

     return (
          <div className="max-w-[1000px] mx-auto mt-8">
               <h1 className="font-bold text-[22px]">{name}</h1>

               <div className="border py-5 px-8 shadow-xl mt-5 mb-5 rounded-3xl">
                    <div className="flex items-center text-[16px] font-semibold justify-between">
                         <p>⭐ {avgRatingString} ({totalRatingsString})</p>
                         <p>{costForTwoMessage}</p>
                    </div>
                    <p className="text-red-600 text-[14px] font-medium mt-2 pl-2">{cuisines.join(', ')}</p>
                    <ul className="list-disc pl-7 mt-4">
                         <li className="text-[15px]"><span className="font-semibold">Outlet -</span> <span className="text-slate-600 ml-1">{locality}, {areaName}</span></li>
                         <li className="text-[15px] font-semibold"><p>{sla?.slaString}</p></li>
                    </ul>
                    <hr className="mt-3 mb-3" />
                    <p dangerouslySetInnerHTML={{ __html: feeDetails?.message }} />
               </div>

               <div className="w-full mx-auto">
                    {categories?.map((category, index) => {
                         return <RestaurantCategory 
                                   showItems={index == showIndex && true} 
                                   setShowIndex={()=> setShowIndex(index)}
                                   key={category.card.card?.title} 
                                   data={category?.card?.card}
                              />     
                    })}
               </div>
               

          </div>
     )
}

export default RestaurantMenu