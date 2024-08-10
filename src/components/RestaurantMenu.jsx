import { useEffect, useState } from "react"
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_INFO_URL } from '../utils/constants'

const RestaurantMenu = () => {

     const [resInfo, setResInfo] = useState(null);

     const { resId } = useParams();

     useEffect(() => {
          fetchMenu();
     }, []);

     const fetchMenu = async () => {
          const data = await fetch(RESTAURANT_INFO_URL + resId);
          const json = await data?.json();
          console.log(json?.data?.cards)
          setResInfo(json?.data);
          console.log(json?.data?.cards[2]?.card?.card?.info)
     }

     if (resInfo === null) return <Shimmer />;

     const { name, cuisines, costForTwoMessage, sla, totalRatingsString, locality, areaName, avgRatingString } = resInfo?.cards[2]?.card?.card?.info

     const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

     return (
          <div className="menu">
               <h1>{name}</h1>
               <h3>{cuisines.join(', ')}</h3>
               <p>{costForTwoMessage}</p>
               <p>{sla?.slaString}</p>
               <p>{totalRatingsString}</p>
               <p>{avgRatingString} stars</p>
               <p>{locality}, {areaName}</p>
               <h3>Offers</h3>
               <div>

               </div>

               <h3>Menu</h3>
               <ul>
                    {itemCards?.map((item) => (
                         <li key={item?.card?.info?.id}>
                              {item?.card?.info?.name} - Rs.{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}
                         </li>
                    )
                    )}
               </ul>
          </div>
     )
}

export default RestaurantMenu