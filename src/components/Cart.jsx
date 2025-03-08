import { useDispatch, useSelector } from "react-redux"
import RestaurantCartList from "./RestaurantCartList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

     const cartItems = useSelector((store)=>{
          return store.cart.items;
     })

     const dispatch = useDispatch()

     const handleEmptyCart = () => {
          dispatch(clearCart());
     }

     return(
          <div className="max-w-[1000px] py-4 mx-auto">
               <div className="flex justify-between items-center mt-4 mb-10">
                    <h1 className="text-center text-[25px] font-bold">Cart</h1>
                    {cartItems.length !=0 && <button className="text-red-600 text-[17px] font-bold py-[7px] px-5 border-[2px] bottom-[3px] left-[25px] bg-white rounded-md" onClick={handleEmptyCart}>Empty Cart</button>}
               </div>

               {cartItems.length === 0 ? <h1>Cart is Empty. Add Items to your Cart!</h1> : <RestaurantCartList listData={cartItems}/>}

               <hr className="mb-5"/>
               
               
          </div>
     )
}

export default Cart;