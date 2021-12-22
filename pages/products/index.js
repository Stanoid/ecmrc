import React ,{useState,useEffect} from 'react'
import Nav from '../../comps/nav'
import Card from '../../comps/card/Card';
import DefaultLayout from '../../layouts/Default';
import { API_URL } from '../../utils/url';
import { ImgHandler } from '../../utils/url';

export default function Products({products}) {

  const [Fdata,setFData] = useState([]);



    return (
      <main>
       <DefaultLayout>
        <div>
          {products.map(product=>(
          //  console.log(product.attr)
  <Card key={product.id} id={product.id} name={product.name} price={product.price} image={ImgHandler(product,"thumbnail")}  />
          ))}
          </div>
         
        </DefaultLayout>
        </main>
    )
}

export async function getStaticProps(){
  const response = await fetch(`${API_URL}/products/`);
  const products = await response.json();

  return{
    props:{
      products
    }
  }


}
