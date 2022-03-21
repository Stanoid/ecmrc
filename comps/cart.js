/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState,useEffect,useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Cartel from './cartel'
import { XIconreact,XIcon } from '@heroicons/react/outline'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { MAIN_STYLE } from '../utils/style'
import { Flip, toast,ToastContainer } from 'react-toastify'
import { CURRENCY } from '../utils/url'
import { useRouter } from 'next/router'
import { useRecoilState } from "recoil";
import { API_URL } from '../utils/url';

import { forwardRef, useRef,useImperativeHandle  } from "react"
const Cart = forwardRef((props, ref) => {
  const [open, setOpen] = useState(true)
  const [scrol,setScrol]=useState(0);
  const [total,setTotal]=useState(0);
  const router = useRouter();
  const [carts,setCarts] = useState([]);
const  ls = require('local-storage');
  const [subtotal,setSubtotal]=useState(0);
 

  useEffect(()=>{

    if(ls.get("cart")){

    }else{
      ls.set("cart",[])
    }
   

},[])

useImperativeHandle(ref, () => ({
  showAlert() {

  
   if(ls.get("cart")){
    setCarts(ls.get("cart"))
   }else{
    ls.set("cart",[])
    setCarts(ls.get("cart"))
   }

  handleTotal();
  
  },
}))

const handleTotal=()=>{
  const totacart = ls.get("cart");
  const total = 0;
  for (let i = 0; i < totacart.length; i++) {
 total = total + (totacart[i].price * totacart[i].qty);

    
  }
  setTotal(total);
}
   
const removeItem  =(optid)=>{
const cartt = carts;


for (let i = 0; i < cartt.length; i++) {
 if(cartt[i].opt.id==optid){
   cartt.splice(i,1);
 }
  
}

ls.set("cart",cartt);
setCarts(ls.get("cart"))
handleTotal();
   
}
   
async function checkUser(){
  
  const requestOptions = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + ls.get("atkn")
    },
   
};
fetch(`${API_URL}/users/me`, requestOptions)
    .then(response => response.json())
    .then(data =>{
      
       console.log("userdata",data)
       if(data.type===1){
     finishSale();
       }else{
       
       }
     
       
       
    }).catch(error =>{ 
    
      console.log(error)
      router.replace("/login")
    
    });



}

const finishSale=()=>{
 // console.log(carts);

  let idarr=[];


  for (let i = 0; i < carts.length; i++) {
    idarr.push(
      {
        "id":carts[i].id,
        "price":carts[i].price,
        "commission":carts[i].comm,
        "product":carts[i].id,
        "status":"initiated"
      }
    )
    
  }

  console.table(idarr);
  
  const requestOptions = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + ls.get("atkn")
    },
    body: JSON.stringify({
       "data":idarr
    })

};

console.log(requestOptions.body);

fetch(`${API_URL}/orders?func=orderInit`, requestOptions)
    .then(response => response.json())
    .then(data =>{
      console.log("done",data);
      notify("success",`Products added succussfully.`)
     
    
       
       
    });





}

const notify = (type,msg)=>{

    const options={
      hideProgressBar:true,
      draggable:true,
      closeButton:false,
      
    }
    switch(type){
      case 'success':
        toast.success(msg,options)
        break;

        case 'error':
          toast.error(msg,options)
          break;

          case 'warn':
            toast.warn(msg,options)
            break;

          

    }
   
  }
  
  return (
    <Transition.Root updatcart={()=>{setCarts(ls.get("cart"))}} show={props.open} as={Fragment}>
      
      <Dialog as="div" className="fixed inset-0 overflow-hidden z-20" onClose={()=>{props.openHandler(false)}}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-black lg:bg-black  bg-opacity-25 lg:bg-opacity-50 transition-opacity" />
          </Transition.Child>
          <div className="fixed bottom-0 right-0 lg:top-0 max-h-1/2   max-w-md flex ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-200 sm:duration-300"
              enterFrom="translate-y-full lg:-translate-y-full"
              enterTo="translate-y-0 lg:-translate-y-0 "
              leave="transform transition ease-in-out duration-200 sm:duration-300"
              leaveFrom="translate-y-0 lg:-translate-y-0 "
              leaveTo="translate-y-full lg:-translate-y-full"
            >
              <div className="relative w-screen ">
              <ToastContainer  limit={3}/>
                
                <div className="h-screen-1/2 flex flex-col py-6 rounded-t-lg rounded-r-lg lg:rounded-r-none lg:rounded-t-none  bg-white shadow-lg overflow-y-hidden">
                <div className='lg:hidden flex' style={{justifyContent:'center',alignItems:'center'}}>
                          <div onClick={()=>{props.openHandler(false)}} style={{width:100,height:5,backgroundColor:'grey',borderRadius:100}}></div>
                      </div>
                  <div className="px-4 sm:px-6 flex align-middle justify-between">
                    
                    <Dialog.Title className="text-lg font-medium text-gray-900  ">My Cart</Dialog.Title>
                    <button className='hidden lg:block' onClick={()=>{props.openHandler(false)}} >   <XIcon className="h-8 w-8 p-1 border-2 rounded-full border-black  " aria-hidden="true" /></button>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {/* Replace with your content */}
                     

                     <div id="scrol"   style={{height:"50vh",overflowY:'scroll', overflowX:'hidden',padding:10}}>
                 
               {carts.length!=0?carts.map(cart=>(
                
                <Cartel removeItem={removeItem} id={cart.id} name={cart.name} price={cart.price} size={cart.opt} comm={cart.comm}  color={cart.color} img={cart.img} qty={cart.qty} />
           
               )):
               <div style={{display:'flex',color:'grey',alignItems:'center',justifyContent:'center',height:'100%',flexDirection:'column'}}>
                 <MdRemoveShoppingCart style={{fontSize:100}} />
                 <div style={{fontWeight:'bold'}}> Empty cart </div>
                 <div>Browse and add items to complete order</div>
                 </div>}
           

              
               
                   {/* <div onClick={()=>{
                
                 if(ls.get("cart")){
                // ls.set("cart",JSON.stringify(carts))
                 }else{
                 ls.set("cart",[])
                 }

                 setCarts(ls.get("cart"))
                
                 
                  

                    
                  //   setCarts(carts.data.push(
                  //     {id:1}
                  //  ));
                    

                  }}>resetcart</div>
                   <div onClick={()=>{console.log(carts)}}>consolecart</div>
                   <div onClick={()=>{ls.set("cart",[]);setCarts(ls.get("carts"))}}>Clar Cart</div>
                   <div onClick={()=>{console.log(JSON.parse(carts))}}>JSON cart</div> */}
                     {/* <div onClick={()=>{ls.remove("cart"); ls.set("cart",[]); setCarts(ls.get("cart"))}}>Remove with set</div>
                     <div onClick={()=>{ls.remove("cart");  setCarts(ls.get("cart"))}}>Remove to null</div>
                     <div onClick={()=>{console.log(carts)}}>log cart</div>
                        */}

{/* <div onClick={()=>{console.log(carts.length)}}>lenght cart</div> */}
                     
                     
                     <ToastContainer/>
                    
                     </div>
   
                    <div style={{padding:20,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div style={{fontSize:15,fontWeight:'bold'}}></div>
                        <div>
                            <button onClick={()=>{checkUser()}} className='shadow-md font-semibold' style={{padding:"10px 15px 10px 15px",backgroundColor:MAIN_STYLE.primary,color:MAIN_STYLE.secondary,borderRadius:5}}>Finish</button>
                        </div>
                        </div>                  
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
})

export default Cart;
