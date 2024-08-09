import { CDN_RESTAURANT_URL } from '../utils/constants'

const RestaurantCard = (props) => {
     const { resData } = props;
     const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
          resData?.info;
     return (
          <div className="restroCard">
               <img
                    src={
                         CDN_RESTAURANT_URL +
                         cloudinaryImageId
                    }
                    alt=""
               />
               <h3>{name}</h3>
               <h4>{cuisines.join(", ")}</h4>
               <h4>{costForTwo}</h4>
               <h4>{avgRating} stars</h4>
               <h4>{sla?.slaString} minutes</h4>
          </div>
     );
};

export default RestaurantCard;