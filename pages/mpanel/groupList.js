import React from 'react';
import { MAIN_STYLE } from '../../utils/style';
import { API_URL } from '../../utils/url';
import { CURRENCY } from '../../utils/url';
import { MdAdd } from 'react-icons/md';
import ProductPanel from './productpanel';
import { useEffect,useState } from 'react';
import {BsDiagram3,BsPencil} from 'react-icons/bs'


function GroupList(props) {
    const [products, setProducts] = useState(null);
    const  ls = require('local-storage');
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
      const requestOptions = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + ls.get("atkn")
        },
    };
    fetch(`${API_URL}/groups?func=getVendorGroups`, requestOptions)
        .then(response => response.json())
        .then(data =>{
          
       
      setProducts(data);  
      console.log(data) 
           
        });
        


      
    }

  return <div>

<div style={{display:'flex',justifyContent:'flex-end'}}>

{/* <div onClick={()=>{props.pagdler(1)}} style={{display:'flex',justifyContent:'flex-end',alignItems:'center', backgroundColor:MAIN_STYLE.primary,cursor:'pointer',padding:'5px 7px 5px 7px',borderRadius:5}}>
  <MdAdd style={{color:'white',fontSize:25,marginRight:0,padding:0}}/> 
  <span style={{color:'white'}} >Create a group</span>
</div> */}
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
                    Members
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Discounted price
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Ending date 
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status 
                  </th> 
                
                 
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products&&products.map((prd) => (
                  <tr key={"a"}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={prd.product.image[0].url} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{prd.product.name .length>=19?prd.product.name .slice(0,19)+"...":prd.product.name }</div>
                          <div className="text-sm text-gray-500">{prd.product.description .length>=19?prd.product.description .slice(0,19)+"...":prd.product.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{` ${prd.customers.length} / ${prd.members}`}</div>
                     
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{`${prd.price} ${CURRENCY}`}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900"> {prd.endDate}</div>
                      </td>
                  
                  
                    <td style={{color:prd.customers.length<prd.members?"orange":"green"}} className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                   
                   {prd.customers.length<prd.members?"Ongoing":"Completed"}
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

export default GroupList;
