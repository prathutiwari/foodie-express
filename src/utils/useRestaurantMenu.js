import { useEffect, useState } from "react";
import { RESTAURANT_INFO_URL } from "./constants";

const useRestaurantMenu = (resId) => {

     const [resInfo, setResInfo] = useState(null);
     useEffect(() => {
       fetchMenu();
     }, [])

     const fetchMenu = async () => {
          const data = await fetch(RESTAURANT_INFO_URL +  resId);
          const json = await data.json();
          // console.log(json?.data?.cards);
          setResInfo(json?.data);
          console.log(json?.data?.cards[2]?.card?.card?.info);
     }
     
     return resInfo;
}

export default useRestaurantMenu;