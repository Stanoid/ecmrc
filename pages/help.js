import React from 'react';
import { MAIN_STYLE } from '../utils/style';
import { CURRENCY,API_URL } from '../utils/url';
import { MdAdd } from 'react-icons/md';
import Link from "next/link";
import DefaultLayout from '../layouts/Default';
import Image from 'next/image';
import { useEffect,useState } from 'react';
import {BsDiagram3,BsPencil} from 'react-icons/bs'



function Help(props) {
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

  return <DefaultLayout> <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>


<div style={{fontSize:25,fontWeight:'bold',color:MAIN_STYLE.primary,display:'flex', flexDirection:'column',justifyContent:"center",alignItems:'center'}}>
<Image  src={'/support.svg'} width={200} height={200} />
<h1> مرحبآ بك في مركز المساعدة</h1>


<Link href={"https://app.tango.us/app/workflow/--------------------45a43636d4ee4ddb8d5bff9efe4e1e7a"}>
 <div className=' shadow-md px-2 py-1' style={{marginTop:100,fontSize:20,backgroundColor:MAIN_STYLE.primary,color:"white",borderRadius:5}}>
كيف تتم عملية البيع؟
 </div>
  </Link>


</div>






  </div> </DefaultLayout>;
}

export default Help;


// import logo from './logo.svg';

// import { API_URL } from './utils/url';



// function App() {

//   const getdata = ()=>{
//     const requestOptions = {
//       method: 'GET',
//       headers: {
//           "Content-Type": "application/json",
//           // "Authorization": 'Bearer ' + ls.get("atkn")
//       },
//   };
//   fetch(`${API_URL}/orders`, requestOptions)
//       .then(response => response.json())
//       .then(data =>{
        
     
  
//     console.log(data) 
         
//       });
   
//   }


//   const updateOrder=(id)=>{
    
//   const requestOptions = {
//     method: 'PUT',
//     headers: {
//         "Content-Type": "application/json",
//         // "Authorization": 'Bearer ' + ls.get("atkn")
//     },
//     body: JSON.stringify({
//        "data":{
//         "user":1,
//         "amount":420,
//         "n_kind":12,
//         "kind":"non2",
//         "status":2

//        }
//     })

// };


// fetch(`${API_URL}/orders/${id}`, requestOptions)
//     .then(response => response.json())
//     .then(data =>{
//       console.log("done",data);
    
       
       
//     });

//   }


  
//   const deleteOrder=(id)=>{
    
//     const requestOptions = {
//       method: 'PUT',
//       headers: {
//           "Content-Type": "application/json",
//           // "Authorization": 'Bearer ' + ls.get("atkn")
//       },
//       body: JSON.stringify({
//          "data":{
       
//           "status":9
  
//          }
//       })
  
//   };
  
  
//   fetch(`${API_URL}/orders/${id}`, requestOptions)
//       .then(response => response.json())
//       .then(data =>{
//         console.log("done",data);
      
         
         
//       });
  
//     }
  

  
//   const CreateOrder=()=>{
    
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//           "Content-Type": "application/json",
//           // "Authorization": 'Bearer ' + ls.get("atkn")
//       },
//       body: JSON.stringify({
//          "data":{
//           "user":1,
//           "amount":122,
//           "n_kind":12,
//           "kind":"non2",
//           "status":2
  
//          }
//       })
  
//   };
  
  
//   fetch(`${API_URL}/orders`, requestOptions)
//       .then(response => response.json())
//       .then(data =>{
//         console.log("done",data);
      
         
         
//       });
  
//     }


//     const regis =()=>{

  
  
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//           "Content-Type": "application/json",
        
//       },
//       body: JSON.stringify(
//         {
//             "username": "lol",
//             "type":1,
//             "Phone": "0908059994",
//             "email":"mujahid@gmail.com",
//             "password": '11235813',
//             "address":"somwhere"
//           }
//       )
//   };
//   fetch(`${API_URL}/auth/local/register`, requestOptions)
//       .then(response => response.json())
//       .then(data =>{
      
      
//        console.log(data);
         
//       });
  
  
  
//     }
  


//     const login=()=>{
//       const requestOptions = {
//         method: 'POST',
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             "identifier":"mujahid@gmail.com",
//            "password":"11235813"
//         })
//     };
//     fetch(`${API_URL}/auth/local`, requestOptions)
//         .then(response => response.json())
//         .then(data =>{
//             console.log(data);
      
//         });

   
//     }
  

//   return (
//     <div>
    
//       <div onClick={()=>{login(1)}}>
//         Load Data
//       </div>
   
//     </div>
//   );
// }

// export default App;
