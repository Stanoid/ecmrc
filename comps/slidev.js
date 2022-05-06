import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Product from "./product/product"
import { useEffect } from "react"

export default (props) => {



    useEffect(() => {
     console.log("aaaaaaaaaa",props.prd)
         }, [])

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5, spacing: 5 },
      },
    },
    slides: { perView: 1 },
  })

  return (
<div style={{display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column',marginTop:10,width:'100%'}}>

    <div ref={sliderRef} className="keen-slider grid  lg:gap-x-4 lg:gap-y-6 xl:gap-x-4 xl:gap-y-6 md:gap-x-4 md:gap-y-4 gap-x-4 gap-y-4 p-4 xl:grid-cols-6 md:grid-cols-4 grid-cols-2">
  

{props.prd&&props.prd.map(product=>(
  <div  className="keen-slider__slide shadow-lg rounded-lg p-2" >
 <div   key={product.id}>
  <Product key={product.id} cat={product.catagories&&product.catagories} ver={product.vendor&&product.vendor.confirmed} vendor={product.vendor&&product.vendor.username} id={product.id} hasGroup={product.group}  img={product.image[0].url} description={product.description} price={product.stock&&product.stock} name={product.name} />
 
 </div>
 </div>
 ))}

<div  className="keen-slider__slide  rounded-lg p-2" >
    </div>

 </div>
 </div>
  
  )
}
