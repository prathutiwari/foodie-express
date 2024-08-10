import { useState, useEffect } from 'react';
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'

const Header = () => {

     const [btnText, setBtnText] = useState("LogIn");

     // If no dependency array => useEffect is called on every render
     // If dependency array is empty = [] => useEffect is called on initial render (just once)
     // If dependency array is [btnText] => useEffect is calledeverytime when btnText is updated.
     useEffect(() => {
       console.log('useEffect called')
     },[btnText])
     
     return (
          <div className="header">
               <div className="navBar">
                    <div className="logo">
                         <img
                              src={LOGO_URL}
                              alt="App Logo"
                         />
                    </div>
                    <div className="nav-items">
                         <ul>
                              <li>
                                   <Link to="/">Home</Link>
                              </li>
                              <li>
                                   <Link to="/about">About</Link>
                              </li>
                              <li>
                                   <Link to="/contact">Contact</Link>
                              </li>
                              <li>Cart</li>
                              <button 
                                   className='login' 
                                   onClick={() => {
                                        btnText == 'LogIn' ? setBtnText('LogOut') : setBtnText('LogIn') 
                                        ;
                                        console.log(btnText) 
                                   } }>{btnText}
                              </button>
                         </ul>
                    </div>
               </div>
          </div>
     );
};

export default Header;