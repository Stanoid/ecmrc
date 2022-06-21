import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { Flip, Slide, toast,ToastContainer } from 'react-toastify'
import { API_URL,ROOT_URL } from '../utils/url';
import { BsMegaphone,BsShop } from 'react-icons/bs';
import { ArrowRightIcon,PlusIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image';
import { MAIN_STYLE } from '../utils/style';
export default function Register() {

  const [name, setname] = useState("");
  const [states, setstaes] = useState("");
  const [cities, setcities] = useState("");

  const [social1,setSocial1]=useState();
  const [social2,setSocial2]=useState();
  const [social3,setSocial3]=useState();
  const [state,setstate]=useState();
  const [city,setcity]=useState();
  const [address,setaddress]=useState();
  const [phone, setPhone] = useState("");
  const [type, setType] = useState(1);
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



useEffect(()=>{

  getstate();    
 
 },[])


 const getstate=()=>{

  const requestOptions = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
      
    },
  
};
fetch(`${API_URL}/states`, requestOptions)
    .then(response => response.json())
    .then(data =>{
     
    console.log(data);
    setstaes(data.data);
       
    });



   
 }

const handleType=(type)=>{
setType(type);
}

  const regis =()=>{

    if(pass==""||name==""||email==""||phone==""||address==""||city==""||state==""){
      notify("error","جميع الحقول مطلوبة ");
      return;

    }

    if(pass!==cpass){
      notify("error","كلمة السر غير متطابقة ");
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

  let sso = {
    "first":social1,
    "second":social2,
    "third":social3,
  }

  const requestOptions = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
      
    },
    body: JSON.stringify(
      {
          "username": name,
          "type":1,
          "city":city,
          "state":state,
          "adress":address,
          "phone":phone,
          "social":sso,
          "email": email,
          "password": pass,
        }
    )
};
fetch(`${API_URL}/auth/local/register`, requestOptions)
    .then(response => response.json())
    .then(data =>{
      if(data.jwt){
        notify("success",`مرحبآ بك معنا   ${data.user.username}`);
    ls.set("atkn",data.jwt)
    router.replace("/")

      }else{
        console.log(data.error.message)

        if(data.error.message=="Email is already taken"){
          notify("error","بريد إلكتروني مستخدم, حاول تسجيل دخول");
        }else{
          notify("error","حدث خطأ ما,الرجاء المحاولة مرة أخري "+ data.error.message);
        }
      
      }
      
       console.log(data);
       
    });



  }


  const handleemail =(email)=>{
    const newemail= email.replace(/ /g,'');
    setemail(newemail);
  }

  const handlestate=(value)=>{
    console.log("Aaa",value);
    setstate(value)
  const requestOptions = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
      
    },
  
};
fetch(`${API_URL}/states/${value}?populate=cities`, requestOptions)
    .then(response => response.json())
    .then(data =>{
     
    console.log(data.data.attributes.cities.data);
   setcities(data.data.attributes.cities.data);
       
    });


    

  }

    return (
        <div>
            <div style={{position:'absolute', top:0,left:0,zIndex:0}}>
      <Image  src={'/dec1.svg'} width={200} height={200} />
      </div>


      <div style={{position:'absolute', bottom:0,right:0,zIndex:0}}>
      <Image  src={'/dec2.svg'} width={200} height={200} />
      </div>
           <ToastContainer  limit={3}/>
  
            <div className="  bg-gradient-to-br text-right  flex justify-center flex-col items-center w-full">

          

    <div className='py-8' style={{zIndex:1}}>
    <Link href="/" class="navbar-brand" >
      <div>
      <Image src={'/nnng.svg'} width={150} height={60} />
      </div>
        </Link>
    </div>
    <div style={{display:type==0?"none":"block",zIndex:1}} className=" px-10 py-8 rounded-xl w-screen  max-w-sm">
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-600">تسجيل حساب</h1>
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">أسم المستخدم</label>
          <input  onChange={(event)=>{setname(event.target.value)}} value={name} type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label  htmlFor="email" className="block mb-1 text-gray-600 font-semibold">البريد الإلكتروني</label>
          <input value={email} onChange={(event)=>{handleemail(event.target.value)}} type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label  htmlFor="email" className="block mb-1 text-gray-600 font-semibold"> رقم الهاتف</label>
          <input value={phone} onChange={(event)=>{setPhone(event.target.value)}} type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
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
      <button style={{backgroundColor:MAIN_STYLE.primary}} onClick={()=>{setType(0)}} className="mt-4 w-full font-semibold  text-white py-2 rounded-md text-lg tracking-wide">
        <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
       
        التالي
       
        </div>
       
        </button>
      <button onClick={()=>{router.replace("/login")}} className="mt-4 w-full   text-primary py-2 rounded-md text-lg underline tracking-wide">تسجيل دخول  </button>
 
    </div>

    <div style={{display:type==0?"block":"none",zIndex:1}} className=" px-10 py-8 rounded-xl w-screen  max-w-sm">
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-600">تسجيل حساب</h1>
        <div onClick={()=>{setType(1)}} style={{fontSize:15,textDecoration:"underline",color:MAIN_STYLE.primary,textAlign:"left"}}>
          رجوع

        </div>

   <div>
   <label className='block mb-1 text-gray-600 font-semibold' htmlFor="state">إختر المدينة :</label>

<select onChange={()=>{handlestate(event.target.value);}} className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" name="cars" id="state">
  <option selected value="">المدينة</option>
  {states&&states.map(stateo=>(
  <option key={stateo.id}  value={stateo.id}>{stateo.attributes.name}</option>
))}
</select>
   </div>
       
   <div>
   <label className='block mb-1 text-gray-600 font-semibold' htmlFor="city">إختر المنطقة :</label>

<select onChange={()=>{setcity(event.target.value);}} className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" name="cars" id="city">
  <option value="">المنطقة</option>
  {cities&&cities.map(cityo=>(
  <option key={cityo.id}  value={cityo.id}>{cityo.attributes.name}</option>
))}
</select>
   </div>

   <div>
          <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">  العنوان بالتفصيل </label>
          <input  onChange={(event)=>{setaddress(event.target.value)}} value={address} placeholder="العنوان" type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>


        <div>
          <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">روابط صفحات التسويق </label>
          <input  onChange={(event)=>{setSocial1(event.target.value)}} value={social1} placeholder="إختياري" type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>

        <div>
          <input  onChange={(event)=>{setSocial2(event.target.value)}} value={social2} placeholder="إختياري"  type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>

        <div>
          <input  onChange={(event)=>{setSocial3(event.target.value)}} value={social3} type="text" placeholder="إختياري" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>

        <h3>
          <b>ملحوظة:</b>بمعرفة صفحات إعلانك يمكننا تقديم نصائح حول كيفية زيادة مبيعاتك
        </h3>

        <div onClick={()=>{console.log("aaaa")}} style={{fontSize:15,textDecoration:"underline",color:MAIN_STYLE.primary}}>
       إضافة
           </div>
    
      

      
      
      </div>
      <button style={{backgroundColor:MAIN_STYLE.primary}} onClick={()=>{regis();}} className="mt-4 w-full  font-semibold  text-white py-2 rounded-md text-lg tracking-wide">
        <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
       
        إنشاء حساب
       
        </div>
       
        </button>
    
 
    </div>
</div>
            
        </div>
    )
}

