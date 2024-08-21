import { useState, useEffect, useContext } from 'react';
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/userContext';

const Header = () => {

     const [btnText, setBtnText] = useState("LogIn");

     useEffect(() => {
     },[btnText])

     const onlineStatus = useOnlineStatus();

     const data = useContext(userContext);
     
     return (
          <div className="px-5 py-3 shadow-md bg-[#fff]">
               <div className="flex justify-between items-center max-w-[1200] mx-auto">
                    <div className="logo">
                         <img
                              src={LOGO_URL}
                              alt="App Logo"
                              className='w-40'
                         />
                    </div>
                    
                    <div className="nav-items">
                         <ul className='flex items-center'>
                              <li className='mx-4 my-1 cursor-pointer text-xl'>
                                   Online Status: {onlineStatus ? '✅' : '🔴'}
                              </li>
                              <li className='mx-4 my-1 cursor-pointer text-xl'>
                                   <Link to="/">Home</Link>
                              </li>
                              <li className='mx-4 my-1 cursor-pointer text-xl'>
                                   <Link to="/grocery">Grocery</Link>
                              </li>
                              <li className='mx-4 my-1 cursor-pointer text-xl'>
                                   <Link to="/about">About</Link>
                              </li>
                              <li className='mx-4 my-1 cursor-pointer text-xl'>
                                   <Link to="/contact">Contact</Link>
                              </li>
                              <li className='mx-4 my-1 cursor-pointer text-xl'>Cart</li>
                              <button 
                                   className='login mx-4' 
                                   onClick={() => {
                                        btnText == 'LogIn' ? setBtnText('LogOut') : setBtnText('LogIn') 
                                        ;
                                        console.log(btnText) 
                                   } }>{btnText}
                              </button>
                              <li className='mx-4 my-1 cursor-pointer text-xl font-bold text-[18px]'>{data.loggedInUser}</li>
                         </ul>
                    </div>
               </div>
          </div>
     );
};

export default Header;