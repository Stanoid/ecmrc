import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Nav from '../../comps/nav'
import { API_URL } from '../../utils/url'
import Product from '../../comps/product/product'
import DefaultLayout from '../../layouts/Default'
import Crumb from '../../comps/crumb/crumb'
import Hero from '../../comps/hero'
import { useRouter } from 'next/router'
// import ProductList from '../comps/productlist/ProductList'
export default function Catagories({catagory}) {
 const router = useRouter();


 
 const cheapest = (ob)=>{
  let arrs=[];
  ob.map(stock =>(
   arrs.push(stock.attributes.stock_price)
  ))

  return Math.min(...arrs);

 }

  return (
    <div className={styles.container}>
      <Head>
        <title>{catagory.attributes.Name} </title>
        <meta name="description" content="Bendari shop, experience the best shopping in sudan" />
        <meta name="theme-color"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

 
  <DefaultLayout>
 <div style={{width:100,height:100}}>
   
   </div>


   
<div style={{display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column'}}>
<h1 className="text-4xl font font-extrabold tracking-tight text-black sm:text-6xl p-10" style={{fontSize:40}}>
              {catagory.Name}
              </h1>
<div className='grid grid-cols-2 gap-y-5   sm:grid-cols-2 gap-x-5 lg:grid-cols-6 xl:grid-cols-6 xl:gap-x-6 xl:gap-y-6 lg:gap-x-5 lg:gap-y-5'>

{catagory.attributes.products.data.map(product=>(

<div key={product.id}>
 <Product key={product.id} id={product.id}  img={product.attributes.image} description={product.attributes.description} price={cheapest(product.attributes.stocks.data)} name={product.attributes.name} />

</div>
))}

<div style={{height:"100vh"}}></div>



</div>

</div>
   

  </DefaultLayout>
      
    </div>
  )
}


export async function getServerSideProps({params:{id}}){
  const product_res = await fetch(`${API_URL}/catagories/${id}?populate=products,products.stocks`);
  const found = await product_res.json();
  
  console.log("sssssssssssssssssssss",found)

  if(found==undefined||found==null||found=={}||found==[]){
    return {
      props:{
          catagory: null
      }
     
  }
  }else{
    return {
      props:{
        catagory:found.data
      }
    
  }
  }

 
}
// export async function getStaticPaths(){
//   const catagories_res = await fetch(`${API_URL}/catagories`);
//   const catagories = await catagories_res.json();
//  // console.log(catagories)
//   return {
//       paths: catagories.map(catagory=>({
//           params:{id: String(catagory.id)}
//       })),
     
//       fallback:true
//   }
  
//   }

