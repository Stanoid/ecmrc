import React from 'react'
import DefaultLayout from '../../layouts/Default'
import { API_URL } from '../../utils/url';
import {useState} from "react";
import axios from "axios";
import LoadingButton from '../../comps/buttons/loadingButton';
import { useRouter } from 'next/router'
import { Flip, Slide, toast,ToastContainer } from 'react-toastify'
export default function Upload() {
const [emial, setEmial] = useState("");
const [pass, setpass] = useState("");
const ls = require("local-storage")
const router = useRouter();
const [lod, setlod] = useState(0);


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
            <DefaultLayout>
            <ToastContainer  limit={3}/>
            <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
 
    <div  className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-600">Login</h1>
       
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
          <input value={emial}  type="text" onChange={(event)=>{setEmial(event.target.value)}} className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Password</label>
          <input type="password" value={pass} onChange={(event)=>{setpass(event.target.value)}} className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
       <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:"100%"}}>
      <LoadingButton
      act={upload}
      text={"Login"}
      lod= {lod}
      msg={"Logging ..."}
      />
      </div>
      
      {/* <button  className="mt-4 w-full bg-primary text-white py-2 rounded-md text-lg tracking-wide">Login</button>
     */}
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
