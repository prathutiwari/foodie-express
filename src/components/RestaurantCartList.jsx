import { useDispatch } from "react-redux"
import { CDN_RESTAURANT_URL} from "../utils/constants"
import { addItem, removeItem } from "../utils/cartSlice"

const RestaurantCartList = ({listData}) =>{

     const dispatch = useDispatch()

     const handleAddItem = (item) => {
          // Dispatch an action
          dispatch(addItem(item))
     }

     const handleRemoveItem = (item) => {
          dispatch(removeItem(item));
     }

     return (
          <div>
               {
                    listData?.map((item)=>{
                         return (
                              <div key={item?.card?.info?.id} className="mt-3 pb-3 flex justify-between items-center border-b-2 border-l-stone-500">
                                   <div>
                                        <h2 className="font-bold text-[16px]">{item?.card?.info?.name}</h2>
                                        <h4 className="font-semibold">&#8377;{item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice/100 : (item?.card?.info?.finalPrice/100 || item?.card?.info?.price/100)}</h4>
                                        {/* <p className="text-xs font-medium mt-2">⭐{item?.card?.info?.ratings?.aggregatedRating?.rating} <span>({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span></p> */}
                                        <p className="max-w-[600px] text-[13px] text-stone-500 mt-2">{item?.card?.info?.description}</p>
                                   </div>
                                   <div className="relative">
                                        <img
                                             src={
                                                  CDN_RESTAURANT_URL +
                                                  item?.card?.info?.imageId
                                             }
                                             alt=""
                                             className='w-[150px] h-[120px] rounded-xl object-cover mb-4'
                                        />
                                        <div className="flex justify-between">
                                             <button className="text-green-600 text-[17px] font-bold py-[2px] px-5 border-[2px] bg-white rounded-md" onClick={()=> handleAddItem(item)}>+</button>
                                             <button className="text-red-600 text-[17px] font-bold py-[2px] px-5 border-[2px] bg-white rounded-md" onClick={()=> handleRemoveItem(item)}>-</button>
                                        </div>
                                        
                                   </div>
                              </div>
                         )
                    })
               }
          </div>
     )
}

export default RestaurantCartList;