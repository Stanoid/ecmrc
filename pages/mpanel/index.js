import React from 'react'
import DefaultLayout from '../../layouts/Default'
import { API_URL } from '../../utils/url';
import {useState,useEffect} from "react";
import axios from "axios";
import LoadingButton from '../../comps/buttons/loadingButton';
import { useRouter } from 'next/router'
import Container from './container';
import {MdOutlineShoppingCart,MdOfflineBolt,MdSafetyDivider,} from 'react-icons/md'
import {BsBoxSeam,BsBarChartSteps,BsFileBarGraph,BsTruck,BsDiagram3} from 'react-icons/bs'

import Horizel from '../../comps/lists/horizel';
import { Flip, Slide, toast,ToastContainer } from 'react-toastify'
export default function Mpanel() {
const [emial, setEmial] = useState("");
const [pass, setpass] = useState("");
const [page, setPage] = useState(1);
const [userData, setUserData] = useState(0);
const ls = require("local-storage")
const router = useRouter();
const [lod, setlod] = useState(0);


useEffect(()=>{

  
   checkUser(ls.get("atkn"))
     
  
  },[])


  async function checkUser(token){
  
    const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + token
      },
     
  };
  fetch(`${API_URL}/users/me`, requestOptions)
      .then(response => response.json())
      .then(data =>{
        
         console.log("userdata",data)
         if(data.type==1){
          setUserData(data);
         }else{
          router.replace("/login")
         }
       
         
         
      }).catch(error =>{ 
      
        console.log(error)
       router.replace("/login")
      
      });



}

///content is on hold until further notice



const pageHandle=(id)=>{
setPage(id);

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


    const upload  = async ()=>{


    setlod(true);

    if(emial==""||pass==""){
      notify("error","Invalid email or password")
      setlod(false)
      return;
    }
        const requestOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "identifier":emial,
               "password":pass
            })
        };
        fetch(`${API_URL}/auth/local`, requestOptions)
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                
                if(data.jwt){
                    ls.set("atkn",data.jwt);
                 router.replace("panel")
                    notify("success",`Welcom back ${data.user.username}, you will be redirected.`)
                    setlod(false)
                }else{
                    notify("error","Invalid email or password")
                    setlod(false)
                }
            });

       


    }  


    return (
        <div>
            <DefaultLayout footer={2} >
            <ToastContainer  limit={3}/>
            <div className='flex lg:hidden md:flex xl:hidden shadow-xl  justify-around md:justify-center' style={{backgroundColor:'white',width:'100vw',position:"fixed", bottom:0}}>
   
            {/* <Horizel current={page} id={0} pager={pageHandle} icon={BsBarChartSteps} text={"Stats"} /> */}
<Horizel current={page} id={1} pager={pageHandle}  icon={BsBoxSeam} text={"Orders"} />
{/* <Horizel current={page} id={3} pager={pageHandle} icon={BsTruck} text={"so,thing"} />
<Horizel current={page} id={2} pager={pageHandle} icon={BsDiagram3} text={"Groups"} /> */}
   
   
   
         </div>
            <div className=" bg-gradient-to-br from-blue-600 to-indigo-600  w-full">
 
   

    
  
      <div className="grid grid-cols-12 gap-2">
  <div className='col-span-0 hidden md:hidden lg:block xl:block  md:col-span-0 lg:col-span-2 xl:col-span-2  shadow-md ' style={{padding:10}}  >
  <Horizel current={page} id={0} pager={pageHandle} icon={BsBarChartSteps} text={"Stats"} />
<Horizel current={page} id={1} pager={pageHandle}  icon={BsBoxSeam} text={"Orders"} />
<Horizel current={page} id={3} pager={pageHandle} icon={BsTruck} text={"so,thing"} />
<Horizel current={page} id={2} pager={pageHandle} icon={BsDiagram3} text={"Groups"} />


  </div>
 
  <div className='col-span-12  md:col-span-12 lg:col-span-10 xl:col-span-10 '  style={{paddingBottom:100,backgroundColor:'white',minHeight:'100vh',maxHeight:"100vh",overflow:'scroll',padding:10}}>

<Container userData={userData} page={page} />



  </div>
</div>

    
      
    
   
 
</div>
                {/* <div style={{minHeight:'100vh'}}>
                    <div style={{height:100}}></div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
       <input value={emial} placeholder='email' type={"email"} onChange={(event)=>{setEmial(event.target.value)}} />
       <input value={pass}  placeholder='password' type={"password"} onChange={(event)=>{setpass(event.target.value)}} />
       <div onClick={upload}> 
       Login 
               </div>
               
  </div>
                </div> */}
            </DefaultLayout>
        </div>
    )
}
