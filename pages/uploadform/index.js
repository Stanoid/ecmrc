import React from 'react'
import DefaultLayout from '../../layouts/Default'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { MAIN_STYLE } from '../../utils/style';
import { API_URL } from '../../utils/url';
export default function index({cats}) {
    const [name, setname] = useState("");
    const [cat, setcat] = useState(cats[0].id);
    const [sercats, setsercats] = useState();
    const [desc, setdesc] = useState("");
    const [stock, setstock] = useState([]);
    const [colors, setcolors] = useState([]);
    const ls = require("local-storage")   
    const [image, setImage ] = useState(null);
    const [ url, setUrl ] = useState("");
    const [top, settop] = useState("")
    const [tstock, settstock] = useState("")
    const [tprice, settprice] = useState("")
    const [colorname, setcolorname] = useState("")
    const [colovalue, setcolovalue] = useState("")

    // useEffect(() => {
    //     axios.get(`${API_URL}/catagories`)
    //     .then(function (response) {
    //       // handle success
    //      setsercats( response.data);
    //     })
    // }, [])


    const addstock =()=>{
        const old = stock;
  const ob = {"ob":top,"stock":tstock,"price":tprice};
  
  
  

 const joind = old.concat(ob);
  
  setstock(joind);

 
    }


    const addcolor =()=>{
        const old = colors;
  const ob = {"color_name":colorname,"color_value":colovalue};
  console.log(ob)
 const joind = old.concat(ob);
  setcolors(joind);

 
    }

    const upload  =  (ob)=>{


console.log(ls.get("atkn"))

const newob = ob;
console.log("imageob",newob);
let stock_id_array=[];

let doo = new Promise(function(suc) {
    // "Producing Code" (May take some time)
    for (let i = 0; i < ob.data.stocks.length; i++) {
        console.log(newob.data.stocks[i].ob)
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + ls.get("atkn")
            },
            body: JSON.stringify({
               "data":{
                   "option_name":newob.data.stocks[i].ob,
                   "stock":newob.data.stocks[i].stock,
                   "stock_price": newob.data.stocks[i].price
               }
            })
        };
        fetch(`${API_URL}/stocks`, requestOptions)
            .then(response => response.json())
            .then(data =>{
                stock_id_array.push(data.data.id)
               console.log(data.data.id)
               if(i==ob.data.stocks.length-1){
                newob.data.stocks=stock_id_array;
                suc(newob);
               }
               
               
            });
           
       }
       
      

   
     
    });
    doo.then( 
          function(ob){
            const tess = ob.data.stocks;
            console.log("time 2", tess)
            console.log("submitted object",ob);
            const requestOptions = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + ls.get("atkn")
                },
                body: JSON.stringify(ob)
            };
            fetch(`${API_URL}/products`, requestOptions)
                .then(response => response.json())
                .then(data =>{
                   
                   console.log("finalconsole",data)
                   
                   
                });

        }
    ); 
      
    //    setTimeout(finalupload(newob), 10000);

      //finalupload(newob)
       

    }  



    const finalupload = (ob)=>{
       


    }

    const uploadImage = () => {
    
        const upob = {
            "data":{
                name:name,
                description:desc,
                stocks:stock,
                colors:colors,
                catagories:cat,
               
            }
        }
   

        console.dir(upob)



        
        console.log("began")
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "products")
        data.append("cloud_name","strapimedia")
        fetch("  https://api.cloudinary.com/v1_1/strapimedia/image/upload",{
        method:"post",
        body: data
        })
        .then(resp => resp.json())
        .then(data => {
       upob.data.image = data.url;
       upload(upob)
        })
        .catch(err => console.log(err))
        }

    
    return (
       <DefaultLayout>
           <div style={{minHeight:"100vh"}}>
               <div style={{height:100}}> </div>
               <div style={{padding:20,display:"flex",justifyContent:'center',alignItems:'center',flexDirection:"column"}} > 
               {/* <input value={name} placeholder='name' type={"text"} onChange={(event)=>{setname(event.target.value)}} />
               <input value={desc} placeholder='description' type={"text"} onChange={(event)=>{setdesc(event.target.value)}} />
               <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input> */}
               <div>

<div >
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Product informations</h3>
        <p class="mt-1 text-sm text-gray-600">
         Make it as informative as you can to convert sales
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="company-website" class="block text-sm font-medium text-gray-700">
                  Product name
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                
                  <input value={name} onChange={(event)=>{setname(event.target.value)}} type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 rounded-md focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300" placeholder="Product name"/>
                </div>
              </div>
            </div>

            <div>
              <label for="about" class="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div class="mt-1">
                <textarea value={desc} onChange={(event)=>{setdesc(event.target.value)}} id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Brief description of the product.
              </p>
            </div>

            <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Catagory</label>
                <select value={cat} onChange={(event)=>{setcat(event.target.value)}} id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
               
                 {
                      
                    cats&&cats.map((cat)=>{
                     return <option value={cat.id} >{cat.attributes.Name}</option>
                     })
                 }
                </select>

                <p style={{color:MAIN_STYLE.primary,textAlign:'right',textDecoration:'underline'}}>Add new catagory</p>
            
              </div>

           

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Product images
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                 
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke={MAIN_STYLE.primary} fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                      <input  id="file-upload" onChange= {(e)=>{
                    //       const ims = {data};
                    //      const nim = ims.data.push({"id":111});
                    //    console.log(nim)
                           setImage(e.target.files[0]);
                      }}  name="file-upload" type="file" class="sr-only"/>
                    </label>
                   
                   
                  </div>

                 
                 
                </div>
              </div>
              <div style={{padding:10}}>
                       <div style={{display:image?"block":"none"}}>
                           <img width={100} height={100} src={image?URL.createObjectURL(image):""} />

                       </div>
                        {/* <div onClick={()=>{console.log(URL.createObjectURL(image))}}>console image</div> */}
                        <div style={{display:image?"none":"block",color:"grey",fontWeight:"bold"}}>No images</div>
                    </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Stock and pricing</h3>
      
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              

            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block text-sm font-medium text-gray-700">Option name</label>
                <input value={top}  onChange={(event)=>{settop(event.target.value)}} type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="region" class="block text-sm font-medium text-gray-700">Stock</label>
                <input value={tstock}  onChange={(event)=>{settstock(event.target.value)}} type="number" name="region" id="region" autocomplete="address-level1" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-4 sm:col-span-3 lg:col-span-2">
                <label for="postal-code" class="block text-sm font-medium text-gray-700">Price</label>
                <input value={tprice}  onChange={(event)=>{settprice(event.target.value)}} type="number" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
              <div className='col-span-12'>
              <div style={{float:'right'}} class="col-span-4 sm:col-span-3 lg:col-span-2">
                
                <span  onClick={()=>{addstock()}} style={{backgroundColor:MAIN_STYLE.primary,color:"white",padding:"10px 15px",borderRadius:5,cursor:'pointer'}}>Add option</span>
               </div>
              
              </div>
              


        
              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block text-sm font-medium text-gray">Option name</label>
              
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="region" class="block text-sm font-medium text-gray">Stock</label>
               
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal-code" class="block text-sm font-medium text-gray">Price</label>
              
              </div>
               {stock.map(stock=>{
                   return (
                     <>
                     <div className='col-span-12' style={{borderBottom:'1px solid grey'}}></div>
                     <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block text-sm font-medium text-black">{stock.ob}</label>
              
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="region" class="block text-sm font-medium text-black">{stock.stock}</label>
               
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal-code" class="block text-sm font-medium text-black">{stock.price}</label>
                </div>
                     </>  
                     
                   )
               })}
              
          

          <div>
              
          </div>
             

            

            

             

             
            </div>
          </div>

          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              

            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block text-sm font-medium text-gray-700">Color name</label>
                <input value={colorname}  onChange={(event)=>{setcolorname(event.target.value)}} type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="region" class="block text-sm font-medium text-gray-700">Color</label>
                <input value={colovalue}  onChange={(event)=>{setcolovalue(event.target.value)}} type="color" name="region" id="region" autocomplete="address-level1" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

            
              <div className='col-span-12'>
              <div style={{float:'right'}} class="col-span-4 sm:col-span-3 lg:col-span-2">
                
                <span  onClick={()=>{addcolor()}} style={{backgroundColor:MAIN_STYLE.primary,color:"white",padding:"10px 15px",borderRadius:5,cursor:'pointer'}}>Add color</span>
               </div>
              
              </div>
              


        
              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block text-sm font-medium text-gray">Color name</label>
              
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="region" class="block text-sm font-medium text-gray">Color</label>
               
              </div>

            
               {colors.map(color=>{
                   return (
                     <>
                     <div className='col-span-12' style={{borderBottom:'1px solid grey'}}></div>
                     <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block text-sm font-medium text-black">{color.color_name}</label>
              
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <div style={{width:30,height:30,borderRadius:100,backgroundColor:color.color_value}}></div>
              </div>

             
                     </>  
                     
                   )
               })}
              
          

          <div>
              
          </div>
             

            

            

             

             
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>




<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>

{/* <div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
        <p class="mt-1 text-sm text-gray-600">
          Decide which communications you'd like to receive and how.
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <fieldset>
              <legend class="text-base font-medium text-gray-900">By Email</legend>
              <div class="mt-4 space-y-4">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="comments" class="font-medium text-gray-700">Comments</label>
                    <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="candidates" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                    <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="offers" name="offers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="offers" class="font-medium text-gray-700">Offers</label>
                    <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div>
                <legend class="text-base font-medium text-gray-900">Push Notifications</legend>
                <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
              </div>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input id="push-everything" name="push-notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                  <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">
                    Everything
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="push-email" name="push-notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                  <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700">
                    Same as email
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="push-nothing" name="push-notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                  <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div> */}



</div>
               <div style={{display:"flex",marginTop:20}}> 
               <span   style={{margin:'auto'}} onClick={uploadImage} style={{backgroundColor:MAIN_STYLE.primary,color:"white",padding:"10px 15px",borderRadius:5,cursor:'pointer'}}>Upload image</span>
               </div>
               </div>
           </div>
       </DefaultLayout>
    )
}




export async function getServerSideProps(){
    const product_res = await fetch(`${API_URL}/catagories`);
    const found = await product_res.json();
   
    console.log("aaaaaaaaaaaaaaaaaaa",found)

    if(found==undefined||found==null||found=={}||found==[]){
      return {
        props:{
            cats: null
        }
    }
    }else{
      return {
        props:{
            cats:found.data
        }
    }
    }

   
}