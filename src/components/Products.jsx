import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
    offset:300
});

const data=[{
    image:`https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds_ii/product_silo_image/COM-3679_QCEBII-LE_Buds_Front_EclipseGrey_hero.png/jcr:content/renditions/cq5dam.web.320.320.png`,
    title:`Bose QuietComfort Earbuds II`,
    sub:`Earbuds`
},
{
    image:`https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose-music-amplifier/product-silo/CTP-37333_PDP_ECOM_BMA_2.png/jcr:content/renditions/cq5dam.web.320.320.png`,
    title:`Bose Music Amplifier`,
    sub:`Amplifiers`
},
{
    image:`https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_flex/product_silo_images/SLFBSLE_ChilledLilac_PDP_AEM_001.png/jcr:content/renditions/cq5dam.web.320.320.png`,
    title:`Bose Soundlink Flex Bluetooth Speaker`,
    sub:`Portable Bluetooth`
},
{
    image:`https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45-LE_Left-Angle_1200x1022_Midnight-Blue_RGB.png/jcr:content/renditions/cq5dam.web.320.320.png`,
    title:`Bose QuietComfort 45 Headphones`,
    sub:`Noise Cancelling`
},
]




function Products() {
  return (
    <>
    <p className='text-3xl p-5'>Featured Products</p>
    <div className='flex justify-center items-center ml-5 '>
    <div className='flex flex-wrap  justify-between' data-aos="fade-left">
        {data.map((d)=>
        <div className='grid text-center divide-x-2 divide-gray-200 py-10 justify-center '>
        <img src={d.image} className='hover:scale-90 duration-200 '/>
        <div className='text-wrap text-left px-6   '>
        <p className='font-bold'>{d.title}</p>
        <p className='text-gray-900 font-thin'>{d.sub}</p>
        </div>
        </div>
        
        
        )}
    </div>
    </div>
</>
  )
}

export default Products