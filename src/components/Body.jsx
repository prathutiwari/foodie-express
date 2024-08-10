import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
     // Local State Variable  - Super powerful Variable
     const [listOfRestaurants, setListOfRestaurant] = useState([]);
     const [filteredRestaurant, setFilterRestaurant] = useState([]);

     const [searchText, setSearchText] = useState("");

     useEffect(() => {
          fetchData();
     }, [])

     const fetchData = async () => {
          const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
          const json = await data.json();
          // console.log(json?.data?.cards)
          setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

     // Conditional Rendering
     if (listOfRestaurants?.length === 0) {
          return (
               <><div className="body">
                    <Shimmer />
               </div></>
          )
     }

     return (
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