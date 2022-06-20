import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../comps/nav'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { API_URL,ROOT_URL } from '../utils/url'
import Product from '../comps/product/product'
import DefaultLayout from '../layouts/Default'
import Crumb from '../comps/crumb/crumb'
import AuthContext from '../context/AuthContext';
import { MAIN_STYLE } from '../utils/style'
import Hero from '../comps/hero'
import Slidev from '../comps/slidev'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import LargeCrumb from '../comps/crumb/largecrumb'

import { CURRENCY } from '../utils/url'
// import ProductList from '../comps/productlist/ProductList'
export default function Home({catagories}) {
 const router = useRouter();
const ls = require("local-storage");
const{checkLogged} = useContext(AuthContext)
// ls.set("promo",pros);

 const cheapest = (ob)=>{
  let arrs=[];
  ob.map(stock =>(
   arrs.push(stock.stock_price)
  ))

  return Math.min(...arrs);

 }


 
useEffect(()=>{
console.log(catagories)
  checkLogged(1);    
 
 },[])

 const dummyProducts = [
   {"id":1,"name":"pospstar"},
   {"id":2,"name":"mailittoher"},
   {"id":2,"name":"mailittoher"},
   {"id":2,"name":"mailittoher"},
   {"id":2,"name":"mailittoher"},
   {"id":2,"name":"mailittoher"},
   {"id":2,"name":"mailittoher"},


 ]


  return (
    <div style={{textAlign:'right'}} className={styles.container}>
      <Head>
        <title>Bendari | catagories </title>
        <meta name="description" content="Bendari, experience the best shopping in sudan" />
        <meta name="theme-color"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

 
  <DefaultLayout>
 <div className='bg lg:overflow-hidden xl:overflow-hidden overflow-scroll' style={{margin:0,marginTop:0,whiteSpace:'nowrap',padding:'5px 5px 5px 5px'}}>
{catagories.data&&catagories.data.map(catagory=>(
  <Crumb key={catagory.id} id={catagory.id} name={catagory.attributes.Name} />
))}
 </div>



 <div>
 {/* <Hero/> */}
 </div>

<div style={{marginTop:10}} className='p-2 lg:p-6 xl:p-6 md:p-6 '>

 <h1 className={styles.MAIN_FONT} style={{color:MAIN_STYLE.grey,fontWeight:'bold',fontSize:20}}>
               كل الفئات
              </h1>
<div style={{display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column',marginTop:10,width:'100%'}}>

<div className='grid  lg:gap-x-4 lg:gap-y-6 xl:gap-x-4 xl:gap-y-6 md:gap-x-4 md:gap-y-4 gap-x-4 gap-y-4 p-4 xl:grid-cols-6 md:grid-cols-4 grid-cols-3  ' style={{width:'100%'}}>

{catagories&&catagories.data.map(catagory=>(
 
<div  key={catagory.id}>
<LargeCrumb key={catagory.id} id={catagory.id} img={catagory.attributes.image[0].url}  name={catagory.attributes.Name} />
</div>
))}
</div>
</div>
</div>



{/* <div style={{marginTop:10}} className='p-2 lg:p-6 xl:p-6 md:p-6 '>
<h1 className={styles.MAIN_FONT} style={{color:MAIN_STYLE.grey,fontWeight:'bold',fontSize:20}}>
               Bendari best selling:
              </h1>
<Slidev prd={products} />
</div> */}


  </DefaultLayout>
      
    </div>
  )
}



export async function getServerSideProps(){
  const  ls = require('local-storage');
  const response = await fetch(`${API_URL}/catagories?populate=*`);
//   const responseprod = await fetch(`${API_URL}/products?func=getAllProducts`);
  // const promores = await fetch(`${API_URL}/promo`);
  // const pros = await promores.json();
  // ls.set("promo",pros);
  // console.log("promo",pros)
  const catagories = await response.json();
   ls.set("catagories",catagories);
//   console.log("ssssssssssssssssssssssssssssssssss",responseprod)

//   const products = await responseprod.json();
//   console.log("ssssssssssssssssssssssssssssssssss",products)
// console.log(catagories);
// console.log(products);
//  products.reverse();
  return{
    props:{
     catagories
    }
    
  }


}
