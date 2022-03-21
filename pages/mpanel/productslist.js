import React from 'react';
import { MAIN_STYLE } from '../../utils/style';
import { API_URL } from '../../utils/url';
import { CURRENCY } from '../../utils/url';
import { MdAdd } from 'react-icons/md';
import ProductPanel from './productpanel';
import { useEffect,useState } from 'react';
import {BsDiagram3,BsPencil,BsThreeDotsVertical} from 'react-icons/bs'
import Modal from '../../comps/modal';

function ProductsList(props) {
    const [products, setProducts] = useState(null);
    const [modalOpen,setModalOpen] = useState(false);
    const  ls = require('local-storage');
    useEffect(()=>{

     
   getData();
//console.log("aaaaa",props.userData)
       
    
    },[])

    const statushand = (stat)=>{
      switch(stat){
        case 1:
          return <div style={{backgroundColor:"grey",color:"white",fontWeight:"bold",padding:5,borderRadius:5,textAlign:'center'}} >Initiated</div>
          break;

          case 2:
            return <div style={{backgroundColor:"orange",color:"white",fontWeight:"bold",padding:5,borderRadius:5,textAlign:'center'}} >Pending</div>
            break;
      }
      
    }

    const cheapest = (ob)=>{
        let arrs=[];
        ob.map(stock =>(
         arrs.push(stock.stock_price)
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
    fetch(`${API_URL}/orders?func=getMarkerterOrders`, requestOptions)
        .then(response => response.json())
        .then(data =>{
          
       
     setProducts(data);  
      console.log(data) 
           
        });
       // console.log(found)
    }

  return <div>

<div style={{display:'flex',justifyContent:'flex-end'}}>
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
                   Commission
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price 
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                   Status
                  </th>

                  
                
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products&&products.map((product) => (
                  <tr key={"a"}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={product.product.image[0].url} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{product.product.name.length>=19?product.product.name.slice(0,30)+"...":product.product.name}</div>
                          <div className="text-sm text-gray-500">{product.product.description.length>=19?product.product.description.slice(0,19)+"...":product.product.description}</div>
                        </div>
                      </div>
                    </td>
                  

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">    {product.commission +" "+ CURRENCY}</div>
                    
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">    {product.price +" "+ CURRENCY}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">    {statushand(product.status)}</div>
                    </td>
                  
                  

                    <td className=" whitespace-nowrap  text-sm font-medium">
                      <div onClick={()=>{setModalOpen(true)}} style={{display:'flex',fontWeight:'bold',justifyContent:'center',alignItems:'center',cursor:"pointer",color:MAIN_STYLE.secondary,backgroundColor:MAIN_STYLE.primary,padding:5,borderRadius:5}} className="text-indigo-600 text-center hover:text-indigo-900 shadow-xl">
                      <BsDiagram3 style={{fontWeight:'bold',marginRight:5}}/>
                        Sell
                      </div>

                   
                    </td>


                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div onClick={()=>{props.pagdler(5,product.id)}} style={{display:'flex',justifyContent:'center',alignItems:'center',cursor:"pointer",color:'black',padding:5,borderRadius:5}} className="text-indigo-600 text-center hover:text-indigo-900">
                      <BsThreeDotsVertical style={{fontWeight:'bold',fontSize:20}}/>
                       
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
    <Modal act={()=>{console.log("rip to king ron")}} setopen={setModalOpen} open={modalOpen} />
  </div>;
}

export default ProductsList;
