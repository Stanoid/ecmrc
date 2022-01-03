import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../comps/nav'
import Image from 'next/image'
import { API_URL,ROOT_URL } from '../utils/url'
import Product from '../comps/product/product'
import DefaultLayout from '../layouts/Default'
import Crumb from '../comps/crumb/crumb'
import { MAIN_STYLE } from '../utils/style'
import Hero from '../comps/hero'
import { useRouter } from 'next/router'
import { CURRENCY } from '../utils/url'
// import ProductList from '../comps/productlist/ProductList'
export default function Home({catagories,products,pros}) {
 const router = useRouter();
const ls = require("local-storage");

ls.set("promo",pros);

 const cheapest = (ob)=>{
  let arrs=[];
  ob.map(stock =>(
   arrs.push(stock.stock_price)
  ))

  return Math.min(...arrs);

 }


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
    <div className={styles.container}>
      <Head>
        <title>Bendari shop </title>
        <meta name="description" content="Bendari shop, experience the best shopping in sudan" />
        <meta name="theme-color"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

 
  <DefaultLayout>
 <div style={{margin:15,marginTop:0,overflow:'auto',whiteSpace:'nowrap',padding:'5px 0px 5px 0px'}}>
{catagories.map(catagory=>(
  <Crumb key={catagory.id} id={catagory.id} name={catagory.Name} />
))}
 </div>

 <div style={{marginBottom:100}} >
 <Hero/>
 </div>

<div className='p-0 lg:p-10 xl:p-10'>

 <h1 className="text-3xl font font-extrabold tracking-tight text-black lg:text-3xl p-3 ">
               Latest Products:
              </h1>
<div style={{display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column'}}>

<div className='grid grid-cols-2 gap-y-5 sm:grid-cols-2 gap-x-5 lg:grid-cols-6 xl:grid-cols-6 xl:gap-x-6 xl:gap-y-6 lg:gap-x-5 lg:gap-y-5'>

{products.map(product=>(
 

 
<div key={product.id}>
 <Product key={product.id} id={product.id}  img={product.image} description={product.description} price={cheapest(product.stocks)} name={product.name} />
</div>
))}





</div>

</div>

</div>
<div style={{marginTop:20}}> 
<h1 className="text-3xl font font-extrabold tracking-tight text-black lg:text-3xl p-3 ">
            Best sellers:
              </h1>

              
<div style={{margin:15,marginTop:0,overflow:'auto',whiteSpace:'nowrap',padding:'5px 0px 5px 0px'}}>

{products.map(product=>(

<div key={product.id} className='shadow-inner' style={{height:200,width:200,marginRight:20,borderRadius:10,display:'inline-block'}}>
<img
      style={{objectFit:'cover',width:'100%',height:'100%'}}
      
          className={styles.nextimg} 
          src={ROOT_URL+product.image.hash+product.image.ext} 
          />
          <div  style={{display:'flex',justifyContent:'space-between',alignItems:"center", marginTop:10}}>
            <div>{product.name.length>=9?product.name.slice(0,9)+"...":product.name}</div>
            <div> <span style={{padding:4,backgroundColor:MAIN_STYLE.primary,color:'white',borderRadius:3}} className={styles.ptfont}>{`${cheapest(product.stocks)} ${CURRENCY}`}</span>
     </div>

            </div>
</div>

))}




 </div>
 </div>


  </DefaultLayout>
      
    </div>
  )
}



export async function getServerSideProps(){
  const  ls = require('local-storage');
  const response = await fetch(`${API_URL}/catagories`);
  const responseprod = await fetch(`${API_URL}/products`);
  const promores = await fetch(`${API_URL}/promo`);
  const pros = await promores.json();
  ls.set("promo",pros);
  console.log("qqqqqqqqqqqqqqqqqqqqqqq",pros)
  const catagories = await response.json();
   ls.set("catagories",catagories);
  const products = await responseprod.json();
// console.log(catagories);
// console.log(products);

  return{
    props:{
      catagories,products,pros
    }
    
  }


}

