import {React,useState} from 'react'
import {MdPendingActions} from "react-icons/md"
import { MAIN_STYLE } from '../../utils/style'
import VanillaModel from '../../comps/vanillsmodel'
import LoadingBtn from '../../comps/loading/loadingbtn'
import {FaUserCircle,FaBox,FaUsers} from "react-icons/fa"
import {BsFillClockFill,BsFillCreditCardFill,BsInfoCircleFill} from 'react-icons/bs'
import {GiStarsStack,GiRank1} from "react-icons/gi"
function Wallet() {
    const [modalOpen,setModalOpen] = useState(false);

    const closeModal=()=>{
        setModalOpen(false);
       
      
      }


      function ModelContent(){
        const [bnum,setBnum] = useState("");
        const [bname,setBname] = useState("");
        const [lod,setlod] = useState(false);

        const handleBank = ()=>{
            alert("bank submit")
        }

        return(
            <div className='p-3'>

<div className="col-span-3 sm:col-span-2 mb-4">
            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
             الإسم في الحساب
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
            
              <input  value={bname} type={"text"} min={1}  onChange={(event)=>{setBname(event.target.value)}} name="company-website" id="company-website" className="focus:ring-indigo-500 rounded-md focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300" />
            </div>
          </div>

<div className="col-span-3 sm:col-span-2 mb-4">
            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
            رقم الحساب
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
            
              <input  value={bnum} type={"text"} min={1}  onChange={(event)=>{setBnum(event.target.value)}} name="company-website" id="company-website" className="focus:ring-indigo-500 rounded-md focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300" />
            </div>
          </div>

          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div style={{fontSize:15,fontWeight:'bold'}}></div>
                       
                          
    
                    
                         <LoadingBtn act={()=>{handleBank()}}  text={"ربط"} lod={lod} /></div> 

            </div>
           

          
        )
      }


  return (
    <div>
        
<div  className='grid  lg:gap-x-4 lg:gap-y-6 xl:gap-x-4 xl:gap-y-6 md:gap-x-4 md:gap-y-4 gap-x-3 gap-y-3
  xl:grid-cols-3 md:grid-cols-4 grid-cols-2  ' style={{width:'100%',marginBottom:50}}>
   

   <div onClick={()=>{setModalOpen(true)}} className='col-span-2' style={{border:"1px solid #8E4B10",borderRadius:5,padding:15,backgroundColor:"#FDF6B2"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

            <div style={{color:"#8E4B10",marginRight:5}}>
                <BsInfoCircleFill/>
            </div>
    <div style={{color:"#8E4B10"}}>
       لا يوجد حساب بنكي ,اضغط للربط .
    </div>
    </div>

    
    </div>
  

<div className='col-span-2' style={{border:"1px solid"+ MAIN_STYLE.primary,borderRadius:5,padding:15}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

    
       
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:'grey',flexDirection:"column"}}>
        <BsFillCreditCardFill style={{fontSize:30}} />
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div> الرصيد الحالي</div>
            <div style={{fontSize:30,color:MAIN_STYLE.primary}}>2,125,565</div>    
            <div style={{fontSize:13}}>جنيه سوداني</div>
            </div>  
        </div>
        {/* <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <GiStarsStack style={{fontSize:35,color:MAIN_STYLE.primary}}/>
        <span style={{color:"grey"}}>992/2000</span>
        </div> */}
    </div>

    
    </div>

    
<div className='' style={{border:"1px solid"+ MAIN_STYLE.primary,borderRadius:5,padding:15}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:'grey',flexDirection:"column"}}>
        <FaBox style={{fontSize:30}} />
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div style={{fontSize:30,color:MAIN_STYLE.primary}}>0</div>    
            <div>طلب مؤكد</div>
            </div>  
        </div>
        {/* <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <GiStarsStack style={{fontSize:35,color:MAIN_STYLE.primary}}/>
        <span style={{color:"grey"}}>992/2000</span>
        </div> */}
    </div>
    </div>
    

    <div style={{border:"1px solid"+ MAIN_STYLE.primary,borderRadius:5,padding:15}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:'grey',flexDirection:"column"}}>
        <BsFillClockFill style={{fontSize:30}} />
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div style={{fontSize:30,color:MAIN_STYLE.primary}}>0</div>    
            <div>طلب قيد الإنتظار</div>
            </div>  
        </div>
        {/* <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <GiStarsStack style={{fontSize:35,color:MAIN_STYLE.primary}}/>
        <span style={{color:"grey"}}>992/2000</span>
        </div> */}
    </div>
    </div>


    <div style={{border:"1px solid"+ MAIN_STYLE.primary,borderRadius:5,padding:15}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:'grey',flexDirection:"column"}}>
        <FaUsers style={{fontSize:30}} />
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div style={{fontSize:30,color:MAIN_STYLE.primary}}>0</div>    
            <div> المجموعة </div>
            </div>  
        </div>
        {/* <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <GiStarsStack style={{fontSize:35,color:MAIN_STYLE.primary}}/>
        <span style={{color:"grey"}}>992/2000</span>
        </div> */}
    </div>
    </div>

    <div style={{border:"1px solid"+ MAIN_STYLE.primary,borderRadius:5,padding:15}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:'grey',flexDirection:"column"}}>
        <FaUsers style={{fontSize:30}} />
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div style={{fontSize:30,color:MAIN_STYLE.primary}}>0</div>    
            <div> المجموعة </div>
            </div>  
        </div>
        {/* <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <GiStarsStack style={{fontSize:35,color:MAIN_STYLE.primary}}/>
        <span style={{color:"grey"}}>992/2000</span>
        </div> */}
    </div>
    </div>
    

    

   
    
</div>
<VanillaModel type={1} title={"ربط حساب بنكي"} content={ModelContent()} openHandler={()=>{closeModal()}} open={modalOpen} />
    </div>
  )
}

export default Wallet