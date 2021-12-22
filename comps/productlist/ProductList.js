import React from 'react'

 export default function ProductList({products}) {
    return (
        <div style={{padding:15}}> 
        {products.map(product=>(
            <div>{product.id}</div>
        ))}
        </div>
    )
}


export async function getStaticProps(){
    const response = await fetch(`${API_URL}/products`);
    const products = await response.json();
  console.log(products);
  
    return{
      props:{
        products
      }
    }
  
  
  }
