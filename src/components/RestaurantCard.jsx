import { CDN_RESTAURANT_URL } from '../utils/constants'

const RestaurantCard = (props) => {
     const { resData } = props;
     const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
          resData?.info;
     return (
          <div className="mb-5 w-[250px] flex flex-col hover:origin-center hover:scale-[0.95] hover:transition-all">
               <img
                    src={
                         CDN_RESTAURANT_URL +
                         cloudinaryImageId
                    }
                    alt=""
                    className='w-auto rounded-3xl h-[200px] object-cover mb-4'
               />
               <h3 className='text-neutral-900 font-bold text-[20px]'>{name}</h3>
               <div className="flex items-center justify-start font-medium text-[18px] mt-3">
                    <h4>⭐ {avgRating}</h4>
                    <h4 className='mx-3'>🚚</h4>
                    <h4>{sla?.slaString}</h4>
               </div>     
               <h4 className='mt-2 text-slate-600 text-[15px]'>{cuisines.join(", ")}</h4>
               <h4 className='text-slate-600 text-[15px]'>{costForTwo}</h4>
               
          </div>
     );
};

// Higher Order Component

// input  -  RestaurantCard  ==>  RestaurantCardPromoted


export const withOpenLabel = (RestaurantCard) => {
     return (props) => {
          return (
               <div className='relative'>
                    <label className='absolute bg-gray-800 text-white px-[7px] py-[2px] left-[10px] top-2 rounded-lg text-[12px]'>Open</label>
                    <RestaurantCard {...props}/>
               </div>
          )
     }
}

export default RestaurantCard;