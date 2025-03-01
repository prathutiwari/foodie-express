import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
     // Local State Variable  - Super powerful Variable
     const [listOfRestaurants, setListOfRestaurant] = useState([]);
     const [filteredRestaurant, setFilterRestaurant] = useState([]);

     const [searchText, setSearchText] = useState("");

     const RestaurantCardOpen = withOpenLabel(RestaurantCard)
     useEffect(() => {
          fetchData();
     }, [])

     const fetchData = async () => {
          const data = await fetch(RESTAURANT_LIST_URL);
          const json = await data.json();
          setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilterRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

     const onlineStatus = useOnlineStatus();

     if (onlineStatus === false) {
          return (
               <div className="body">
                    <h1>Check your Internet Connection</h1>
               </div>
          );
     }

     return listOfRestaurants.length === 0 ? (
          <Shimmer />
     ) : (
          <div className="body max-w-[1500] mx-auto">
               <div className="flex justify-between items-center my-8">
                    <div className="flex justify-center items-center">
                         <input type="email" name="email" value={searchText} onChange={(e) => {
                              setSearchText(e.target.value);
                         }} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Filter By Restaurant Name" />
                         <button className="text-[15px] ml-2 text-[#fff] px-[30] py-[6] rounded-[5px] bg-[#ff5200] hover:bg-[#ff5100a0] focus:outline-none focus:ring" onClick={() => {
                              const filterSearchList = listOfRestaurants.filter(
                                   (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                              )
                              setFilterRestaurant(filterSearchList);
                         }}>Filter</button>
                    </div>

                    <button className="text-[15px] ml-2 text-[#fff] px-[30] py-[6] rounded-[5px] bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring" onClick={() => {
                         // Filter logic here
                         const filteredList = listOfRestaurants?.filter(
                              (res) => res.info.avgRating > 4
                         )
                         console.log(filteredList)
                         setListOfRestaurant(filteredList)
                    }}>
                         Top Rated Restaurant
                    </button>

               </div>

               <div className="flex flex-wrap justify-between mt-[30px] gap-4 items-stretch">
                    {filteredRestaurant?.map((restaurant) => (
                         <Link key={restaurant?.info?.id} to={'/restaurants/' + restaurant?.info?.id}>
                              <RestaurantCard resData={restaurant}/>
                         </Link>
                    ))}
               </div>
          </div>
     );
};

export default Body;