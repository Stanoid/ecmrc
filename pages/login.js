import React from 'react'
import DefaultLayout from '../layouts/Default'
import { API_URL } from '../utils/url';
import {useState} from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import { Flip, Slide, toast,ToastContainer } from 'react-toastify'
export default function Login() {
const [emial, setEmial] = useState("");
const [pass, setpass] = useState("");
const ls = require("local-storage")
const router = useRouter();

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
                    ls.set("utkn",data.jwt);
                 router.replace("/")
                    notify("success",`Welcom back ${data.user.username}, you will be redirected.`)
                }else{
                    notify("error","Invalid email or password")
                }
            });

       


    }  


    return (
        <div>
            <DefaultLayout>
            <ToastContainer  limit={3}/>
            <div class="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
 
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Login</h1>
       
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Email</label>
          <input value={emial}  type="text" onChange={(event)=>{setEmial(event.target.value)}} class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Password</label>
          <input type="password" value={pass} onChange={(event)=>{setpass(event.target.value)}} class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      
      <button onClick={upload} class="mt-4 w-full bg-primary text-white py-2 rounded-md text-lg tracking-wide">Login</button>
      <button onClick={()=>{router.replace("/register")}} class="mt-4 w-full  text-primary py-2 rounded-md text-lg underline tracking-wide">Create an account</button>
 
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
