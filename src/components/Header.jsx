import { useState } from 'react';
import { LOGO_URL } from '../utils/constants'

const Header = () => {

     const [btnText, setBtnText] = useState("LogIn");

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
                              <li>Home</li>
                              <li>About Us</li>
                              <li>Contact Us</li>
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