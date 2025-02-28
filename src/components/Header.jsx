import { useState, useEffect, useContext } from 'react';
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/userContext';
import { useSelector } from 'react-redux';

const Header = () => {
     const [btnText, setBtnText] = useState("LogIn");

     useEffect(() => {

     },[btnText])

     const onlineStatus = useOnlineStatus();

     const {loggedInUser} = useContext(userContext);

     // Subscribing to the store using Selector
     const cartItems = useSelector((store) => {
          return store.cart.items;
     })
     console.log(cartItems)

     return (
          <div className="px-5 py-3 shadow-md bg-[#fff]">
               <div className="flex justify-between items-center max-w-[1500] mx-auto">
                    <div className="logo">
                         <img
                              src={LOGO_URL}
                              alt="App Logo"
                              className='w-40'
                         />
                    </div>
                    
                    <div className="nav-items">
                         <ul className='flex items-center'>
                              <li className='mx-4 my-1 cursor-pointer text-base'>
                                   Online Status: {onlineStatus ? '✅' : '🔴'}
                              </li>
                              <li className='mx-4 my-1 cursor-pointer text-base'>
                                   <Link to="/">Home</Link>
                              </li>
                              {/* <li className='mx-4 my-1 cursor-pointer text-base'>
                                   <Link to="/grocery">Grocery</Link>
                              </li> */}
                              <li className='mx-4 my-1 cursor-pointer text-base'>
                                   <Link to="/about">About</Link>
                              </li>
                              <li className='mx-4 my-1 cursor-pointer text-base'>
                                   <Link to="/contact">Contact</Link>
                              </li>
                              <button 
                                   className='login mx-4' 
                                   onClick={() => {
                                        btnText == 'LogIn' ? setBtnText('LogOut') : setBtnText('LogIn')
                                   } }>{btnText}
                              </button>
                              {/* <li className='mx-4 my-1 cursor-pointer text-base font-semibold text-[18px]'>{loggedInUser}</li> */}
                              <li className='mx-4 my-1 cursor-pointer text-base font-semibold relative'>
                                   <Link to="/cart">🛒 <span className='text-[10px] absolute top-[-10px]'>{cartItems.length > 0 ? cartItems.length : ''}</span></Link>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     );
};

export default Header;