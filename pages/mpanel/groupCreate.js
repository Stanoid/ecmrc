import React from 'react'
import DefaultLayout from '../../layouts/Default'
import { useState,useEffect } from 'react'
import axios from 'axios';
import LoadingButton from '../../comps/buttons/loadingButton';
import { Flip, Slide, toast,ToastContainer } from 'react-toastify'
import { MAIN_STYLE } from '../../utils/style';
import { MdChevronLeft,MdDeleteForever } from 'react-icons/md';
import { API_URL } from '../../utils/url';
 function GroupCreate(props) {
    const [name, setname] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    const [part, setPart] = useState(0);
    const [loading,setLoading] = useState(0);
    const [edate, setEdate] = useState("");
    const [bname, setBname] = useState("");
    const [bphone, setBphone] = useState("");
    const [bbphone, setBbphone] = useState("");
    const [badd, setBadd] = useState("");

    
    // const [cat, setcat] = useState(cats&&cats.length!==0?cats[0].id:null);
    const [oldPrice, setOldPrice] = useState(0);
    const ls = require("local-storage")   
    useEffect(() => {
   getProductData();
    }, [])


    


    async function getProductData(){
      const product_res = await fetch(`${API_URL}/products/${props.Pid}?func=getBasicPrice`);
      const found = await product_res.json();
    
    
  //     console.log(found)
      setname(found.name)
      // setdesc(found.data.attributes.description);
     setOldPrice(found.stock.price)
  //  // console.log("old price", found.data.attributes.stocks.data[0].attributes.stock)


      console.log("Group item info",found)
  }

   


const createGroup = ()=>{
 

  if(newPrice<oldPrice){
    notify("warn","سعر البيع أقل من السعر الأساسي   .")
    return
  }

  if(part<1){
    notify("warn","لا يمكن للكمية ان تكون اقل من 1")
    return
  }

  if(bname==""||bname==" "||badd==""||badd==" "||bphone==""||bphone==" "){
    notify("warn","معلومات المشتري فارغة.")
    return
  }


  setLoading(1);


  const requestOptions = {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + ls.get("atkn")
    },
    body: JSON.stringify({
       "data":{
           "bName":bname,
           "bAdd":badd,
           "bPhone": bphone,
           "bbPhone": bbphone,
           "qty": part,
           "salePrice": newPrice,

       }
    })

};

console.log(requestOptions.body);

fetch(`${API_URL}/orders/${props.Oid}?func=makeSale&&order=${props.Oid}`, requestOptions)
    .then(response => response.json())
    .then(data =>{
      console.log("done",data);
      notify("success",`تمت العملية, في إنتظار تأكيد المشتري`)
       setLoading(0);
      props.pagdler(1)
       
       
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
      <div>
             <ToastContainer  limit={3}/>
           <div  style={{minHeight:"100vh",textAlign:"right"}}>
              <div style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>

              <div onClick={()=>{props.pagdler(1)}} style={{display:'flex',justifyContent:'flex-start',alignItems:'center',cursor:'pointer'}}>
                <MdChevronLeft style={{color:'white', backgroundColor:MAIN_STYLE.primary,fontSize:25,marginRight:5,borderRadius:100,padding:0}}/> 
                <span >رجوع</span>
              </div>

             
              </div>
               <div style={{padding:20,display:"flex",justifyContent:'center',alignItems:'center',flexDirection:"column"}} > 
               {/* <input value={name} placeholder='name' type={"text"} onChange={(event)=>{setname(event.target.value)}} />
               <input value={desc} placeholder='description' type={"text"} onChange={(event)=>{setdesc(event.target.value)}} />
               <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input> */}
               <div>

<div >
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">عملية بيع</h3>
        <p className="mt-1 text-sm text-gray-600">
      الرجاء كتابة معلومات المشتري بدقة, سيتم التواصل مع المشتري لتأكيد الطلب
        </p>
      </div>
    </div>
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                   المنتج
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                
                  <input disabled={true} value={name} style={{backgroundColor:'lightgray'}} onChange={(event)=>{setname(event.target.value)}} type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 rounded-md focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300" placeholder="Product name"/>
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                  السعر الأساسي 
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                
                  <input disabled={true} value={oldPrice+" SDG"} style={{backgroundColor:'lightgray'}} onChange={(event)=>{setname(event.target.value)}} type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 rounded-md focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300" placeholder="Product name"/>
                </div>
              </div>
            
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                  سعر البيع 
                </label>
                <div style={{display:"flex",flexDirection:'column'}} className="mt-1 flex rounded-md shadow-sm">
                
                  <input  value={newPrice}   onChange={(event)=>{setNewPrice(event.target.value)}} type="number" name="company-website" id="company-website" className="focus:ring-indigo-500 rounded-md focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300"/>
                <span style={{color:'grey',fontSize:15,fontStyle:'italic',padding:10}}> Any increse above the listed price will be added to your balance </span>
                </div>
              </div>


            

              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                 الكمية
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                
                  <input  value={part} type={"number"} min={1}  onChange={(event)=>{setPart(event.target.value)}} name="company-website" id="company-website" className="focus:ring-indigo-500 rounded-md focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300" />
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                 إسم المشتري 
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                
                  <input  value={bname} type={"text"} min={1}  onChange={(event)=>{setBname(event.target.value)}} name="company-website" id="company-website" className="focus:ring-indigo-500 rounded-md focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300" />
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                 رقم الهاتف 
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                
                  <input  value={bphone} type={"text"} min={1}  onChange={(event)=>{setBphone(event.target.value)}} name="company-website" id="company-website" className="focus:ring-indigo-500 rounded-md focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300" />
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                 رقم الهاتف الإحتياطي  
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                
                  <input  value={bbphone} type={"text"} min={1}  onChange={(event)=>{setBbphone(event.target.value)}} name="company-website" id="company-website" className="focus:ring-indigo-500 rounded-md focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300" />
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                 العنوان 
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                
                  <input  value={badd} type={"text"} min={1}  onChange={(event)=>{setBadd(event.target.value)}} name="company-website" id="company-website" className="focus:ring-indigo-500 rounded-md focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300" />
                </div>
              </div>

              {/* <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                  Ending date
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                
                  <input  value={edate}  onChange={(event)=>{setEdate(event.target.value)}} type="date" name="company-website" id="company-website" className="focus:ring-indigo-500 rounded-md focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300" placeholder="Ending date"/>
                </div>
              </div> */}


            </div>
          </div>

          <div style={{display:"flex",marginTop:20}}> 

<LoadingButton
act={createGroup}
text={"بيع"}
lod= {loading}
msg={"جاري التحقق ..."}
/>

{/* <div  onClick={()=>{createGroup()}}  className="bg-white px-10  rounded-xl w-screen  max-w-sm">
      
        {"Create"}
    
      </div> */}


{/* <span   onClick={uploadImage} style={{backgroundColor:MAIN_STYLE.primary,color:"white",padding:"10px 15px",borderRadius:5,cursor:'pointer',margin:"auto"}}>Upload</span>
*/}
</div>

<div style={{height:200}}></div>
         
        </div>
      </form>
    </div>
  </div>
</div>


</div>
            
               </div>
           </div>
       </div>
    )
}


export default GroupCreate;



// export async function getServerSideProps(){
//     const product_res = await fetch(`${API_URL}/catagories`);
//     const found = await product_res.json();
   
//     console.log("aaaaaaaaaaaaaaaaaaa",found)

//     if(found==undefined||found==null||found=={}||found==[]){
//       return {
//         props:{
//             cats: null
//         }
//     }
//     }else{
//       return {
//         props:{
//             cats:found.data
//         }
//     }
//     }

   
// }