import React ,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { API_URL } from '../../utils/url';
import DefaultLayout from '../../layouts/Default';
import { ImgHandler } from '../../utils/url';
export default function Product({productel}) {

   
   
    
    
   

    return (

        <DefaultLayout  >
             { productel &&(
              <div style={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>

       
       <img src={ImgHandler(productel,"large")} width={"80%"}  />    
        
             
             <div style={{textAlign:'center'}}>
            <div style={{fontWeight:'bold',color:"grey",fontSize:40}}>
            {productel.name}
            </div>

            <div style={{fontSize:20,color:'lightgreen',fontWeight:'bold'}}>
            {productel.price}
            </div>

            <div style={{fontSize:20}}>
            {productel.description}
            </div>

            </div>
         
      
       
               

              </div> 

             )

             }
             
           
        </DefaultLayout>
    )
}


export async function getStaticProps({params:{id}}){
    const product_res = await fetch(`${API_URL}/products/?id=${id}`);
    const found = await product_res.json();
    const newfind = JSON.stringify(found[0])
    console.log(newfind);

    

    return {
        props:{
            productel:found[0]
        }
    }
}

export async function getStaticPaths(){
const product_res = await fetch(`${API_URL}/products`);
const product = await product_res.json();
console.log( product);
return {
    paths: product.map(product=>({
        params:{id: String(product.id)}
    })),
    fallback:false
}

}