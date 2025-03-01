import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='bg-[rgba(233,233,233,0.63)] py-8 mt-10'>
        <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1">
            <h1 className='text-[22px] font-normal mb-2'>Policy</h1>
            <ul>
              <li className='text-[18px] text-gray-600 mb-1'>Privacy Policy</li>
              <li className='text-[18px] text-gray-600 mb-1'>Terms & Conditions</li>
              <li className='text-[18px] text-gray-600 mb-1'>Cencellation/Refund Policy</li>
              <li className='text-[18px] text-gray-600 mb-1'>Shipping Policy</li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h1 className='text-[22px] font-normal mb-2'>Contact Us</h1>
            <ul>
              <li className='text-[16px] text-gray-600 flex items-start mb-3'>
                <i className="fi fi-rs-marker mr-2 mt-1"></i> Naubasta, Kanpur Nagar
              </li>
              <li className='text-[16px] text-gray-600 flex items-start mb-3'>
                <i className="fi fi-rs-envelope mr-2 mt-1"></i> prathutripathee@gmail.com
              </li>
              <li className='text-[16px] text-gray-600 flex items-start'>
                <i className="fi fi-ts-phone-call mr-2 mt-1"></i> 7355732435
              </li>
            </ul>
          </div>
        </div>
        </div>
      </footer>
    <div className='bg-[#E9E9E9] py-5 flex justify-center items-center'>
      <p className='text-[16px]'>© Copyright 2025. All Rights Reserved.</p>
    </div>
    </>
    
  )
}

export default Footer;