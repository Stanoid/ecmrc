/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState,useEffect,useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Cartel from './cartel'
import { XIconreact,XIcon } from '@heroicons/react/outline'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { MAIN_STYLE } from '../utils/style'
import { Flip, toast,ToastContainer } from 'react-toastify'
import { CURRENCY } from '../utils/url'
import LoadingBtn from '../comps/loading/loadingbtn';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useRecoilState } from "recoil";
import { API_URL } from '../utils/url';

import { forwardRef, useRef,useImperativeHandle  } from "react"
import handleViewport from 'react-in-viewport'
const Cart = forwardRef((props, ref) => {
  const [open, setOpen] = useState(true)
  const [scrol,setScrol]=useState(0);
  const [lod,setLod]=useState(0);
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
  setLod(1)
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
      ls.set("cart",[]);
      notify("success",`تمت إضافة المنتجات  .`)
      setLod(0)
      router.push("/mpanel")
      props.openHandler(false);
     
    
       
       
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
  

 const handleCart = ()=>{

  if(carts.length==0){
    notify("warn","سلة فارغة ")
  }else{
    checkUser();
  }


 }


  return (
    <Transition.Root  show={props.open} as={Fragment}>
      
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
            <Dialog.Overlay  className="absolute inset-0 bg-black lg:bg-black  bg-opacity-10 lg:bg-opacity-50 transition-opacity" />
          </Transition.Child>
          <div className="fixed bottom-0 right-0 lg:top-0 max-h-1/2 text-right   max-w-md flex ">
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
                    
                    <Dialog.Title className="text-lg font-medium text-gray-900  ">سلتي </Dialog.Title>
                    <div className=' lg:block' onClick={()=>{props.openHandler(false)}} >   <XIcon className="h-8 w-8 p-1 border-2 rounded-full border-black  " aria-hidden="true" /></div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
              
                     

                     <div id="scrol"   style={{height:"50vh",overflowY:'scroll', overflowX:'hidden',padding:10}}>
                 
               {carts.length!=0?carts.map(cart=>(
                
                <Cartel removeItem={()=>{removeItem()}} id={cart.id} name={cart.name} price={cart.price} size={cart.opt} comm={cart.comm}  color={cart.color} img={cart.img} qty={cart.qty} />
           
               )):
               <div style={{display:'flex',color:'grey',alignItems:'center',justifyContent:'center',height:'100%',flexDirection:'column'}}>
                  <div>
      <Image src={'/void.svg'} width={200} height={200} />
      </div>
                 <div style={{fontWeight:'bold'}}> سلة فارغة  </div>
                 <div>تصفح المنتجات و أضفها للمتابعة</div>
                 </div>}
           

              
               
                   
                     
                     <ToastContainer/>
                    
                     </div>
   
                    <div style={{padding:20,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div style={{fontSize:15,fontWeight:'bold'}}></div>
                       
                          
                          
                         
                        

                    
                         <LoadingBtn act={()=>{handleCart()}}  text={"متابعة"} lod={lod} /></div>                  
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
