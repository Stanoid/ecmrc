import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Flip, Slide, toast,ToastContainer } from 'react-toastify'
import { API_URL,ROOT_URL } from '../utils/url';
import { BsMegaphone,BsShop } from 'react-icons/bs'
import { useRouter } from 'next/router';
export default function Register() {

  const [name, setname] = useState("");
  const [type, setType] = useState(0);
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


const handleType=(type)=>{
setType(type);
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
          "type":type,
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
    ls.set("atkn",data.jwt)
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

            <div className="h-screen  bg-gradient-to-br from-primary text-right to-secondary flex justify-center items-center w-full">
  
    <div style={{display:type==0?"none":"block"}} className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-600">تسجيل حساب</h1>
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">أسم المستخدم</label>
          <input  onChange={(event)=>{setname(event.target.value)}} value={name} type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label  htmlFor="email" className="block mb-1 text-gray-600 font-semibold">البريد الإلكتروني</label>
          <input value={email} onChange={(event)=>{setemail(event.target.value)}} type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">كلمة المرور</label>
          <input value={pass} onChange={(event)=>{setpass(event.target.value)}} type="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">تأكيد كلمة المرور </label>
          <input value={cpass} onChange={(event)=>{setcpass(event.target.value)}} type="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      <button onClick={()=>{regis()}} className="mt-4 w-full bg-primary font-semibold  text-secondary py-2 rounded-md text-lg tracking-wide">إنشاء</button>
      <button onClick={()=>{router.replace("/login")}} className="mt-4 w-full   text-primary py-2 rounded-md text-lg underline tracking-wide">تسجيل دخول  </button>
 
    </div>

    <div style={{display:type==0?"block":"none"}} className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-xl">
      <div className="space-y-4">
        <h1 className=" text-1xl font-semibold text-gray-600">إنضم لبنداري ك؟  :</h1>

        <div className='grid grid-cols-6 gap-x-4 gap-y-4' style={{marginTop:40}}>
        <div className='col-span-6 lg:col-span-3' > 
        <div onClick={()=>{handleType(1)}}  className='p-2 shadow-md hover:shadow-xl transition ease-in-out rounded-md' style={{cursor:'pointer',display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:'column'}}>
       <BsMegaphone  className='text-primary'  style={{fontSize:60,marginBottom:10}}/>
        <h1 className=" text-2xl font-semibold text-gray-600">مسوق</h1>
        <h1 className="p-4 text-1xl text-center font-semibold text-gray-600">أريد تسويق منتجات وأخذ بالعمولة</h1>
          </div>
          
        
       
        </div>
        </div>

        <div className='col-span-6 lg:col-span-3' > 
        <div onClick={()=>{handleType(2)}} className='p-2 shadow-md hover:shadow-xl transition ease-in-out rounded-md' style={{ cursor:"pointer", display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:'column'}}>
        <BsShop className='text-primary' style={{fontSize:60,marginBottom:10}}/>
        <h1 className=" text-2xl font-semibold text-gray-600">بائع</h1>
        <h1 className="p-4 text-1xl text-center font-semibold text-gray-600">لدي منتجات و أبحث عن مسوقين</h1>
          </div>
          
        
       
        </div>
        </div>
        </div>
        
    
      
      
      
      </div>
     
    </div>
  
</div>
            
        </div>
    )
}

