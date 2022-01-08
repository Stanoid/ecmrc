import React from 'react'
import DefaultLayout from '../../layouts/Default'
import { API_URL } from '../../utils/url';
import {useState} from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import { Flip, Slide, toast,ToastContainer } from 'react-toastify'
export default function Upload() {
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
                    ls.set("atkn",data.jwt);
                 router.replace("uploadform")
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
                <div style={{minHeight:'100vh'}}>
                    <div style={{height:100}}></div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
       <input value={emial} placeholder='email' type={"email"} onChange={(event)=>{setEmial(event.target.value)}} />
       <input value={pass}  placeholder='password' type={"password"} onChange={(event)=>{setpass(event.target.value)}} />
       <div onClick={upload}> 
       Login 
               </div>
               
  </div>
                </div>
            </DefaultLayout>
        </div>
    )
}
