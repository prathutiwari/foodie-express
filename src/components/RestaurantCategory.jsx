import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

     const handleclick = () => {
          setShowIndex();
     }
     return (
          <div className="border py-3 px-8 shadow-lg mt-5 mb-5 rounded-md">
               <div className="cursor-pointer flex items-center justify-between" onClick={handleclick}>
                    <h2 className="font-semibold text-[15px]">{data?.title} ({data?.itemCards?.length})</h2>
                    <span>⬇️</span>
               </div>
               <div>
                    {showItems && <RestaurantItemList listData={data?.itemCards}/>}
               </div>
          </div>          
     );
};

export default RestaurantCategory; 