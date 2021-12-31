import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../comps/nav'
import { API_URL } from '../utils/url'
import Product from '../comps/product/product'
import DefaultLayout from '../layouts/Default'
import Crumb from '../comps/crumb/crumb'
import Hero from '../comps/hero'
import { useRouter } from 'next/router'
// import ProductList from '../comps/productlist/ProductList'
export default function Home({catagories,products}) {
 const router = useRouter();


 const cheapest = (ob)=>{
  let arrs=[];
  ob.map(stock =>(
   arrs.push(stock.stock_price)
  ))

  return Math.min(...arrs);

 }


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
  <Crumb key={catagory.id} name={catagory.Name} />
))}
 </div>

 <div style={{marginBottom:100}} >
 <Hero/>
 </div>


<div style={{display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column'}}>
<h1 className="text-4xl font font-extrabold tracking-tight text-black sm:text-6xl p-10" style={{fontSize:40}}>
               Latest Products:
              </h1>
<div className='grid grid-cols-2 gap-y-5   sm:grid-cols-2 gap-x-5 lg:grid-cols-6 xl:grid-cols-6 xl:gap-x-6 xl:gap-y-6 lg:gap-x-5 lg:gap-y-5'>

{products.map(product=>(
 

 
<div>
 <Product key={product.id} id={product.id}  img={product.image} description={product.description} price={cheapest(product.stocks)} name={product.name} />
</div>
))}

<div style={{height:"100vh"}}></div>



</div>

</div>



  </DefaultLayout>
      
    </div>
  )
}



export async function getStaticProps(){
  const response = await fetch(`${API_URL}/catagories`);
  const responseprod = await fetch(`${API_URL}/products`);
  const catagories = await response.json();
  const products = await responseprod.json();
// console.log(catagories);
// console.log(products);

  return{
    props:{
      catagories,products
    },
    revalidate:60,
  }


}

