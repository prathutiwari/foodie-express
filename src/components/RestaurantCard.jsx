import { CDN_RESTAURANT_URL } from '../utils/constants'

const RestaurantCard = (props) => {
     const { resData } = props;
     const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
          resData?.info;
     return (
          <div className="mb-5 w-[300px] flex flex-col hover:origin-center hover:scale-[0.95] hover:transition-all shadow-xl rounded-xl min-h-72">
               <img
                    src={
                         CDN_RESTAURANT_URL +
                         cloudinaryImageId
                    }
                    alt=""
                    className='w-auto rounded-ss-xl rounded-se-xl h-[150px] object-cover mb-2'
               />
               <div className='px-3 py-3 flex-grow'>
                    <h3 className='text-neutral-900 font-bold text-[20px]'>{name}</h3>
                    <div className="flex items-center justify-start font-medium text-[18px] mt-3">
                         <h4>⭐ {avgRating}</h4>
                         <h4 className='mx-3'>🚚</h4>
                         <h4>{sla?.slaString}</h4>
                    </div>     
                    <h4 className='mt-2 text-slate-600 text-[15px]'>{cuisines.join(", ")}</h4>
                    <h4 className='text-slate-600 text-[15px]'>{costForTwo}</h4>
               </div>
               
               
          </div>
     );
};

// Higher Order Component

// input  -  RestaurantCard  ==>  RestaurantCardPromoted


export const withOpenLabel = (RestaurantCard) => {
     return (props) => {
          return (
               <div className='relative'>
                    <label className='absolute bg-gray-800 text-white px-[7px] py-[2px] left-[10px] top-2 rounded-lg text-[12px] z-10'>Open</label>
                    <RestaurantCard {...props}/>
               </div>
          )
     }
}

export default RestaurantCard;