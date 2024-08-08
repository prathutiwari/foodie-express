import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

import resList from '../utils/mockData'

const Body = () => {
     // Local State Variable  - Super powerful Variable
     const [listOfRestaurants, setListOfRestaurant] = useState(resList);


     // Normal JS Variable
     // let listOfRestaurantJS = [
     //      {
     //           info: {
     //                id: "337899",
     //                name: "The Paratha House",
     //                cloudinaryImageId: "jhjyc3xjdbkqr9wbzsj7",
     //                costForTwo: "₹150 for two",
     //                cuisines: ["North Indian"],
     //                avgRating: 4.5,
     //                sla: {
     //                     deliveryTime: 60
     //                }
     //           }
     //      },
     //      {
     //           info: {
     //                id: "337890",
     //                name: "The Lunch House",
     //                cloudinaryImageId: "jhjyc3xjdbkqr9wbzsj7",
     //                costForTwo: "₹150 for two",
     //                cuisines: ["North Indian", "Chinese"],
     //                avgRating: 3.8,
     //                sla: {
     //                     deliveryTime: 50
     //                }
     //           }
     //      },
     //      {
     //           info: {
     //                id: "337893",
     //                name: "Burger House",
     //                cloudinaryImageId: "jhjyc3xjdbkqr9wbzsj7",
     //                costForTwo: "₹150 for two",
     //                cuisines: ["North Indian", "Chinese"],
     //                avgRating: 4.2,
     //                sla: {
     //                     deliveryTime: 50
     //                }
     //           }
     //      }
     // ]

     return (
          <div className="body">
               <div className="filter">
                    <button className="filterBtn" onClick={()=>{
                         // Filter logic here
                         const filteredList = listOfRestaurants.filter(
                              (res) => res.info.avgRating > 4
                         )
                         console.log(filteredList)
                         setListOfRestaurant(filteredList)
                    }}>
                         Top Rated Restaurant
                    </button>
               </div>
               <div className="restro-container">
                    {listOfRestaurants.map((restaurant) => (
                         <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                    ))}
               </div>
          </div>
     );
};

export default Body;