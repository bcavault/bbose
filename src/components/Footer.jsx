import React from 'react'
import { Mail } from 'lucide-react';
function Footer() {
  return (
    <footer>
        <div className='w-full h-auto bg-[#0d0d0d] relative bottom-0'>
            <div className='w-full h-auto  bg-[#191919] flex p-10 text-gray-400 gap-3 items-center text-xl '>
                <Mail /> Email & Sign up             
            </div>

            <div className=' gap-y-7 p-7 flex flex-wrap gap-80'>
                <div className='font-extrabold text-white flex flex-col'>
                    <span>BOSE PROFESSIONAL</span>
                    <span>AUTOMOTIVE SYSTEMS</span>
                    <span>BOSE WORK</span>
                </div>

            <div className='grid text-gray-500'>
              <span>Support</span>  
              <span>Contact Us</span>  
              <span>Find a Store</span>  
              <span>About Us</span>  
              <span>Work at Bose</span>  
              <span>Bose Incentives, Awards & Gifts</span>  
              <span>Bose Worldwide</span>  
                </div>
                <div className='grid text-gray-500'>
                    <span>Privacy policy</span>
                    <span>Terms of use</span>
                    <span>SMS Terms of Use</span>
                    <span>Beware of counterfeits</span>
                    <span>Cookies notice</span>
                    <span>Copyright Policy</span>
                    <span>Trademarks</span>
                    <span>Sustainability at Bose</span>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer