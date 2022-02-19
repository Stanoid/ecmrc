import React from 'react';
import { MAIN_STYLE } from '../../utils/style';
import { API_URL } from '../../utils/url';
import { CURRENCY } from '../../utils/url';
import { MdAdd } from 'react-icons/md';
import ProductPanel from './productpanel';
import { useEffect,useState } from 'react';
import {BsDiagram3,BsPencil} from 'react-icons/bs'


function ProductsList(props) {
    const [products, setProducts] = useState(null);
    
    useEffect(()=>{

     
    getData();
//console.log("aaaaa",props.userData)
       
    
    },[])

    const cheapest = (ob)=>{
        let arrs=[];
        ob.data.map(stock =>(
         arrs.push(stock.attributes.stock_price)
        ))
      
        return Math.min(...arrs);
      
       }    

    async function getData(){
        const product_res = await fetch(`${API_URL}/products?populate=*`);
        const found = await product_res.json();
      
        let prd = [];
        for (let i = 0; i < found.data.length; i++) {
          if(found.data[i].attributes.vendor.data.id==props.userData.id){
              prd.push(found.data[i])
          }
            
        }

        console.log(prd)
        let newprd = {data:prd}
        console.log(newprd)
        setProducts(newprd);


       // console.log(found)
    }

  return <div>

<div style={{display:'flex',justifyContent:'flex-end'}}>

<div onClick={()=>{props.pagdler(2)}} style={{display:'flex',justifyContent:'flex-end',alignItems:'center', backgroundColor:MAIN_STYLE.primary,cursor:'pointer',padding:'5px 7px 5px 7px',borderRadius:5}}>
  <MdAdd style={{color:'white',fontSize:25,marginRight:0,padding:0}}/> 
  <span style={{color:'white'}} >Add new product</span>
</div>
</div>
   
<div className='grid grid-cols-2 gap-y-5 sm:grid-cols-2 gap-x-5 lg:grid-cols-6 xl:grid-cols-6 xl:gap-x-6 xl:gap-y-6 lg:gap-x-5 lg:gap-y-5'>

{/* {products&&products.data.map(product=>(
 <div key={product.id}>
  <ProductPanel key={product.id} id={product.id}  img={product.attributes.image[0].url} description={product.attributes.description} price={cheapest(product.attributes.stocks)} name={product.attributes.name} />
 </div>

 ))} */}
 </div>

 
 <div className="flex flex-col" style={{marginTop:15}}>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price 
                  </th>

                  
                
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products&&products.data.map((product) => (
                  <tr key={"a"}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={product.attributes.image[0].url} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{product.attributes.name}</div>
                          <div className="text-sm text-gray-500">{product.attributes.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.attributes.description}</div>
                     
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900"> Updated on: {product.attributes.updatedAt.slice(0,product.attributes.updatedAt.indexOf("T"))}</div>
                      <div className="text-sm text-gray-500"> Added on: {product.attributes.publishedAt.slice(0,product.attributes.publishedAt.indexOf("T"))}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {cheapest(product.attributes.stocks) +" "+ CURRENCY}
                      </span>
                    </td>
                  
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div onClick={()=>{props.pagdler(5,product.id)}} style={{display:'flex',justifyContent:'center',alignItems:'center',cursor:"pointer",color:'black',backgroundColor:"lightgray",padding:5,borderRadius:5}} className="text-indigo-600 text-center hover:text-indigo-900">
                      <BsPencil style={{fontWeight:'bold',marginRight:5}}/>
                        Edit
                      </div>
                    </td>

                    <td className=" whitespace-nowrap  text-sm font-medium">
                      <div onClick={()=>{props.pagdler(5,product.id)}} style={{display:'flex',justifyContent:'center',alignItems:'center',cursor:"pointer",color:'white',backgroundColor:MAIN_STYLE.primary,padding:5,borderRadius:5}} className="text-indigo-600 text-center hover:text-indigo-900">
                      <BsDiagram3 style={{fontWeight:'bold',marginRight:5}}/>
                        Create a Group
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>;
}

export default ProductsList;
