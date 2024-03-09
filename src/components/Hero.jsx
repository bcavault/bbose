import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
    offset:200
});

function Hero() {
  return (
   

    <section>

      <div>
        <img src="https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/homepage/images_3x1/AEM_HP_HP-PANEL-2.jpg/jcr:content/renditions/cq5dam.web.1920.1920.jpeg" className="aspect-[3/1] bg-cover object-cover   
        object-right w-full block h-[250px] md:h-full md:w-full "  />


        <div className="flex flex-col justify-center items-center p-6 md:absolute md:top-52 md:left-32 z-[99]" data-aos="fade-in">
          <h1 className="text-[20px] font-bold leading-[18px] tracking-normal md:text-3xl">Go beyond the beat</h1>
          <p className="text-[12px] leading-5 tracking-[2px] font-normal mt-[16px] text-center md:text-sm">INTRODUCING THE NEW QUIETCOMFORT HEADPHONES</p>
          <button className="mt-5 mb-5 ml-6 mr-6 text-[#f8f8f8] bg-[#242424] py-[10px] px-[35px] font-bold rounded-3xl">LEARN MORE</button>
        </div>
      </div>
      <div>
    
      </div>
      </section>
  )
}

export default Hero