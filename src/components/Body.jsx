import RestaurantCard from "./RestaurantCard";
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

     useEffect(() => {
          fetchData();
     }, [])

     const fetchData = async () => {
          const data = await fetch(RESTAURANT_LIST_URL);
          const json = await data.json();
          setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

     const onlineStatus = useOnlineStatus();

     if(onlineStatus === false){
          return(
               <div className="body">
                    <h1>Check your Internet Connection</h1>
               </div>
          );
     }

     return listOfRestaurants.length === 0 ? (
          <Shimmer />
     ) : (
          <div className="body">
               <div className="filter">


                    <div className="search">
                         <input type="text" className="searchInput" value={searchText} onChange={(e) => {
                              setSearchText(e.target.value);
                         }} />
                         <button className="filterBtn" onClick={() => {
                              const filterSearchList = listOfRestaurants.filter(
                                   (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                              )
                              setFilterRestaurant(filterSearchList);
                         }}>Filter</button>
                    </div>


                    <button className="filterBtn" onClick={() => {
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

               <div className="restro-container">
                    {filteredRestaurant?.map((restaurant) => (
                         <Link key={restaurant?.info?.id} to={'/restaurants/' + restaurant?.info?.id}>
                              <RestaurantCard resData={restaurant} />
                         </Link>
                    ))}
               </div>
          </div>
     );
};

export default Body;