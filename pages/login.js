import React from 'react'
import DefaultLayout from '../layouts/Default'
import { API_URL } from '../utils/url';
import {useState,useContext} from "react";
import axios from "axios";
import LoadingBtn from '../comps/loading/loadingbtn';
import { useRouter } from 'next/router'
import AuthContext from '../context/AuthContext';
import { Flip, Slide, toast,ToastContainer } from 'react-toastify'
export default function Login() {
const [emial, setEmial] = useState("");

const [pass, setpass] = useState("");
const [lod, setlod] = useState(0);
const{loginUser,loading} = useContext(AuthContext)
const router = useRouter();


const handlelogin=()=>{
 setlod(1);
 console.log(loading);
 loginUser(emial,pass)

 

}

   


    return (
        <div>
            <DefaultLayout>

            <div className="h-screen text-right bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
 
    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-600">تسجيل دخول</h1>
       
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">البريد الإلكتروني</label>
          <input value={emial}  type="text" onChange={(event)=>{setEmial(event.target.value)}} className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">كلمة المرور</label>
          <input type="password" value={pass} onChange={(event)=>{setpass(event.target.value)}} className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      
      <LoadingBtn act={handlelogin} text={"دخول"} lod={lod} />
      {/* <button onClick={()=>{}} className="mt-4 w-full bg-primary text-white py-2 rounded-md text-lg tracking-wide">Login</button> */}
      <button onClick={()=>{router.replace("/register")}} className="mt-4 w-full  text-primary py-2 rounded-md text-lg underline tracking-wide"> تسجيل حساب جديد </button>
 
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
