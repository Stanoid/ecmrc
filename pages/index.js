import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import { API_URL,ROOT_URL } from '../utils/url'
import ListLoading from '../comps/loading/listloading'
import Product from '../comps/product/product'
import DefaultLayout from '../layouts/Default'
import AuthContext from '../context/AuthContext';
import { MAIN_STYLE } from '../utils/style'
import Hero from '../comps/hero'
import { useContext } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
export default function Home() {
const{checkLogged} = useContext(AuthContext)

useEffect(()=>{

  checkLogged(1);   
   
 
 },[])


 const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    
    <Homeo />
   
  </QueryClientProvider>

    )
}


function Homeo(){

 

  async function getProducts(){
    const responseprod = await fetch(`${API_URL}/products?func=getAllProducts`);
    const products = await  responseprod.json();
    //console.log(responseprod)
  return products.reverse();
  
    
  }
  
  const {data,status} = useQuery(['todos'], getProducts);
console.log("dataqqqq",data);





  return(
    <div style={{textAlign:'right'}} className={styles.container}>
    <Head>
      <title>Bendari | Get online marketers on Bendari </title>
      <meta name="description" content="Bendari shop, experience the best shopping in sudan" />
      <meta name="theme-color"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
<DefaultLayout>
<div>
<Hero/>
</div>
<div style={{marginTop:10}} className='p-2 lg:p-6 xl:p-6 md:p-6 '>
<h1 className={styles.MAIN_FONT} style={{color:MAIN_STYLE.grey,fontWeight:'bold',fontSize:20}}>
            وصل حديثآ
            </h1>
<div style={{display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column',marginTop:10,width:'100%'}}>

<div className='grid  lg:gap-x-4 lg:gap-y-6 xl:gap-x-4 xl:gap-y-6 md:gap-x-4 md:gap-y-4 gap-x-4 gap-y-4 p-4 xl:grid-cols-6 md:grid-cols-4 grid-cols-2  ' style={{width:'100%'}}>
<ListLoading text={"جاري تحميل المنتجات"} lod={status=="success"?0:1} width={100}/>
{data&&data.map(product=>(

<div  key={product.id}>
<Product key={product.id} cat={product.catagories&&product.catagories} ver={product.vendor&&product.vendor.confirmed} vendor={product.vendor&&product.vendor.username} id={product.id} hasGroup={product.group}  img={product.image[0].url} description={product.description} price={product.stock&&product.stock} name={product.name} />

</div>
))}
</div>
</div>
</div>
</DefaultLayout>    
  </div>

  )

}



// export async function getServerSideProps(){
//   const  ls = require('local-storage');
//   // const response = await fetch(`${API_URL}/catagories`);
//   const responseprod = await fetch(`${API_URL}/products?func=getAllProducts`);
//   // const promores = await fetch(`${API_URL}/promo`);
//   // const pros = await promores.json();
//   // ls.set("promo",pros);
//   // console.log("promo",pros)
//   // const catagories = await response.json();
//   //  ls.set("catagories",catagories);
//  // console.log("ssssssssssssssssssssssssssssssssss",responseprod)

//   const products = await responseprod.json();
//   //console.log("ssssssssssssssssssssssssssssssssss",products)
// // console.log(catagories);
// // console.log(products);
//  products.reverse();
//   return{
//     props:{
//       products
//     }
    
//   }


// }

