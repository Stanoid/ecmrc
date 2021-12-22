import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../comps/nav'
import { API_URL } from '../utils/url'
import Product from '../comps/product/product'
import DefaultLayout from '../layouts/Default'
import Crumb from '../comps/crumb/crumb'
// import ProductList from '../comps/productlist/ProductList'
export default function Home({catagories,products}) {
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

<div style={{padding:15,display:'flex',flexWrap:'wrap',justifyContent:"space-between"}}>

{products.map(product=>(
 <Product description={product.description} price={product.price} name={product.name} />
))}

 {/* <Product name={"test"} />
 <Product name={"test"} />
 <Product name={"test"} />
 <Product name={"test"} />
 <Product name={"test"} />
 <Product name={"test"} />
 <Product name={"test"} />
 <Product name={"test"} />
 <Product name={"test"} />
 <Product name={"test"} />
 <Product name={"test"} />
 <Product name={"test"} />
 <Product name={"test"} /> */}

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
    }
  }


}

