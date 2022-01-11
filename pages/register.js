import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Flip, Slide, toast,ToastContainer } from 'react-toastify'
import { API_URL,ROOT_URL } from '../utils/url';
import { useRouter } from 'next/router';
export default function Register() {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
 const ls = require("local-storage");
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

  const regis =()=>{

    if(pass==""||name==""||email==""){
      notify("error","Empty fields, all fields are requiered");
      return;

    }

    if(pass!==cpass){
      notify("error","Password mismatch");
      return;

    }


  //   axios
  // .post(`${API_URL}/auth/local`, {
  //   username: name,
  //   email: email,
  //   password: pass,
  // })
  // .then(response => {
  //  notify("success","Registered succefully");
  //  router.replace("/login");

  // })
  // .catch(error => {
  //   notify("error","Something wrong, please try again later");
  // });


  const requestOptions = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
      
    },
    body: JSON.stringify(
      {
          "username": name,
          "email": email,
          "password": pass,
        }
    )
};
fetch(`${API_URL}/auth/local/register`, requestOptions)
    .then(response => response.json())
    .then(data =>{
      if(data.jwt){
        notify("success",`Welcome on board ${data.user.username}`);
    ls.set("utkn",data.jwt)
    router.replace("/")

      }else{
        notify("error","Something wrong, please try again later");
      }
      
       console.log(data);
       
    });



  }

    return (
        <div>
           <ToastContainer  limit={3}/>

            <div class="h-screen bg-gradient-to-br from-primary to-black flex justify-center items-center w-full">
  
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Register</h1>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Username</label>
          <input  onChange={(event)=>{setname(event.target.value)}} value={name} type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label  for="email" class="block mb-1 text-gray-600 font-semibold">Email</label>
          <input value={email} onChange={(event)=>{setemail(event.target.value)}} type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Password</label>
          <input value={pass} onChange={(event)=>{setpass(event.target.value)}} type="password" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Confirm password</label>
          <input value={cpass} onChange={(event)=>{setcpass(event.target.value)}} type="password" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      <button onClick={()=>{regis()}} class="mt-4 w-full bg-primary  text-white py-2 rounded-md text-lg tracking-wide">Register</button>
      <button onClick={()=>{router.replace("/login")}} class="mt-4 w-full  text-primary py-2 rounded-md text-lg underline tracking-wide">Login instead</button>
 
    </div>
  
</div>
            
        </div>
    )
}

