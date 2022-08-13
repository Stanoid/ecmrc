import React from 'react'
import {MdPendingActions} from "react-icons/md"
import { MAIN_STYLE } from '../../utils/style'

import {FaUserCircle,FaBox,FaUsers} from "react-icons/fa"
import {BsFillClockFill,BsFillCreditCardFill} from 'react-icons/bs'
import {GiStarsStack,GiRank1} from "react-icons/gi"
function Wallet() {
  return (
    <div>
        
<div  className='grid  lg:gap-x-4 lg:gap-y-6 xl:gap-x-4 xl:gap-y-6 md:gap-x-4 md:gap-y-4 gap-x-3 gap-y-3
 p-4 xl:grid-cols-3 md:grid-cols-4 grid-cols-2  ' style={{width:'100%',marginBottom:50}}>
   

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
    </div>
  )
}

export default Wallet