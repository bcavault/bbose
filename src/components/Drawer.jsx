import React from 'react'

function Drawer() {
  return (
    <div>
    <div className=" bg-[#161616] text-white w-full h-full  absolute overflow-hidden ease-in-out duration-300 delay-200  ">

      <div className="grid p-6 mt-20  divide-y-[2px] align-middle divide-gray-400 bg-[#242424] bg-blend-screen">
        <span className="flex justify-between py-3">Headphones<button>+</button></span>
        <span className="flex justify-between py-3">Speaker<button>+</button></span>
        <span className="flex justify-between py-3">Audio sunglasses<button>+</button></span>
        <span className="py-3">Sleep</span>
      <span className="py-3">Stories</span>
      </div>
      <div className="grid p-6 mt-2 align-middle ">
        <span className="py-3 bg-[#161616]">Support</span>
        <span className="py-3 bg-[#161616]">Store</span>
      </div>
    </div>
  </div>

    )
}

export default Drawer