import React from 'react'
import Image from 'next/image'
import SimpleImageSlider from "react-simple-image-slider";
import Slider from './mainSlider';
import { MAIN_STYLE } from '../utils/style';
export default function Hero(props) {
 
    return (
       <div className='p-1 lg:p-6 xl:p-6 md:p-6 '>
         
         <div className='grid grid-cols-6 gap-x-1.5 gap-y-1.5' >

   

           <div style={{width:'100%',position:"relative",height:"40vh"}} className='lg:col-span-4 xl:col-span-4 md:col-span-3 col-span-6'>
         
           <Slider slides={['/ltd2.jpg','/per.jpg','/wat.jpg']} />
 {/* <SimpleImageSlider
        width={"100%"}
        height={"50%"}
        images={ [
          {
          "url": "https://res.cloudinary.com/strapimedia/image/upload/v1645445395/tyler-nix-BQrxXytYaHI-unsplash_zeggsu.jpg"
          },
          {
          "url": "https://res.cloudinary.com/strapimedia/image/upload/v1645445395/tyler-nix-BQrxXytYaHI-unsplash_zeggsu.jpg"
          }
          ]}
        showBullets={true}
        showNavs={true}
      /> */}
    
           </div>
           <div style={{height:"40vh",position:"relative"}} className='lg:col-span-2 xl:col-span-2 md:col-span-3 col-span-6'>
           <Image  className="rounded-lg" src={'/blk2.jpg'}layout="fill" objectFit="cover" />
           </div>
           
         </div>
       </div>
    )
}
