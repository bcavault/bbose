import React, { useState } from "react";
import { AlignJustify, Search, Settings, MapPin} from "lucide-react";
import Drawer from './components/Drawer.jsx';
import "./App.css";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!isDrawerOpen);
  }

  return (
    <>
      

      {isDrawerOpen && <Drawer />}

    <div className="hidden md:block" data-aos="fade-out">
      <div className="bg-[#191919] h-[95px]  flex justify-between p-4 items-center  " >

        <div className="  ">
            <img src="//static.bose.com/etc/designs/bose/consumer-products-2016/design/images/bose_logo.png" className="h-20 absolute top-0 left-20" alt="Bose Logo" />
          </div>

          <div className="uppercase text-white text-[12px] flex gap-7 absolute left-60 top-16 tracking-wider">
              <span>Headphones</span>
              <span>speakers</span>
              <span>Audio_sunglasses</span>
              <span>sleep</span>
              <span>stories</span>
            
            </div>




    <div className="flex  gap-x-6   ">
          <div>
            <input type="search" placeholder="Search..." className="px-2 py-1 rounded-full" />
            <Search  className="absolute top-9 right-[12.5rem]"/>
            </div>
          <div className="flex gap-3 text-sm top-5 ">
          <div className="flex items-center text-white"><Settings />  Support</div>
                <div className="flex items-center text-white"><MapPin /> Stores</div>
              
          </div>
      </div>
      </div>
      </div>




      <div className="bg-[#191919] h-[70px] md:hidden flex justify-between p-4 items-center ">
        {/* Navbar */}
        <div className="text-white  z-50">
      <button onClick={toggleDrawer}>
          <AlignJustify />
          </button>
        </div>
        <div className="h-[56px] w-[100px] ">
          <img src="//static.bose.com/etc/designs/bose/consumer-products-2016/design/images/bose_mobile_logo.png" alt="Bose Logo" />

        </div>
        <div className="text-white ">
          <Search />
        </div>
      </div>
    </>
  );
}

export default App;
