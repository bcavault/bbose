import React from 'react'
import 'aos/dist/aos.css'; 
AOS.init({
    offset:200
});

function Caraousel() {
  return (
    <div className='md:grid'>
        <div>
        <img src='https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/homepage/images_3x1/STEVIE_LAUNCH_AEM_HP_PANEL_EXPRESSIVE_03.jpg/jcr:content/renditions/cq5dam.web.1920.1920.jpeg' className='w-full h-auto object-cover md:absolute' />
        <div className='grid text-center bg-[#242424] text-white py-4 md:absolute md:right-48 md: md:mt-32 md:bg-transparent ' data-aos="fade-left">
            <span className='text-lg py-2 md:text-3xl md:font-bold'>Feel your favourite<br /> content, everywhere.</span>
            <span className='text-sm font-extralight text-gray-200 tracking-wider md:text-lg'>New | Bose Smart Ultra Soundbar</span>
            <button className='py-2 md:bg-[#191919] md:w-32 md:rounded-full md:ml-20 md:mt-5 '>Learn More</button>
        </div>
        </div>

        <div>
        <img src='https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/homepage/SLFBS_CypressGreen_HEADER_RGB.png/jcr:content/renditions/cq5dam.web.1920.1920.png' className='w-full h-auto object-cover md:absolute md:mt-[33%] '/>
        <div className='grid text-center bg-[#242424] text-white py-4 md:absolute md:bg-transparent  md:mt-[40%] md:left-28 ' data-aos="fade-right" >
            <span className='text-lg py-2 md:text-wrap md:w-64 md:text-4xl md:font-bold md:ml-5'>Vivid Sound. Bold new hue</span>
            <span className='text-sm font-extralight text-gray-200 tracking-wider text-wrap px-3 md:w-80 md:text-xl'>
BOSE SOUNDLINK FLEX BLUETOOTH® SPEAKER IN CYPRESS GREEN</span>
            <button className='py-2 md:bg-[#191919] md:w-32 md:rounded-full md:ml-20 md:mt-5'>Learn More</button>
        </div>
        </div>


        <div>
        <img src='https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/homepage/images_3x1/qceii_hp_triple_black_right_d_3x1.jpg/jcr:content/renditions/cq5dam.web.1920.1920.jpeg' className='w-full h-auto object-cover md:absolute md:mt-[66%]'/>
        <div className='grid text-center bg-[#242424] text-white py-4 md:absolute md:mt-[78%] md:right-32 md:bg-transparent ' data-aos="fade-left">
            <span className='text-lg py-2 md:text-4xl md:font-bold'>Sound Just got personal.</span>
            <span className='text-sm font-extralight text-gray-200 tracking-wider md:text-xl'>New | Bose Smart Ultra Soundbar</span>
            <button className='py-2 md:bg-[#191919] md:w-32 md:rounded-full md:ml-36 md:mt-5'>Learn More</button>
        </div>
        </div>

        <div>
        <img src='https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/content_pages/corporate/about_us/sustainability/Sustainability_2020_refresh/01_Home_OurApproach_1920x1043.psd/jcr:content/renditions/cq5dam.web.1920.1920.jpeg' className='w-full h-auto object-cover  md:mt-[98%]'/>
        <div className='grid text-center  py-4 justify-center  items-center md:absolute md:top-[2630px] md:right-28  md:bg-white md:p-5' data-aos="fade-right"> 
            <span className='text-lg py-2 md:text-5xl md:font-bold  '>Keeping it Green</span>
            <span className='text-sm tracking-wider md:text-xl'>Learn About sustainability in Bose</span>
            <button className='py-2 mt-3 ml-10 md:ml-28 md:bg-[#191919] bg-[#242424] text-white rounded-full w-36  '>Learn More</button>
        </div>
        </div>
        <div>
        <img src='https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/homepage/images_3x1/automotive_hp_panel_new_3x1.jpg/jcr:content/renditions/cq5dam.web.1920.1920.jpeg' className='w-full h-auto object-cover'/>
        <div className='grid text-center bg-black text-white py-4 justify-center  items-center md:absolute md:right-28 md:top-[200rem] md:bg-transparent z-[99]' data-aos="fade-left">
            <span className='text-sm py-2 md:text-lg'>Bose Automotive</span>
            <span className='text-lg font-extralight text-gray-200 tracking-wider md:text-4xl md:font-bold md:w-96'>True believer in the power of sound</span>
            <button className='py-2 mt-5 ml-20 md:bg-white md:ml-28 md:text-black bg-[#242424] text-white rounded-full w-36  '>Learn More</button>
        </div>
        </div>

        <div className=' p-5 text-sm font-bold text-center z-[999]' data-aos="zoom-in">
            <p>Important recall notice regarding certain Acoustimass, Lifestyle and Companion system bass modules manufactured prior to 1 April 2006.</p>
            <button className='py-2 mt-5 px-2  bg-[#242424] text-white rounded-full w-36  '>Learn More</button>
        </div>
    </div>
  )
}

export default Caraousel