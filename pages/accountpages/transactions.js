import React from 'react'
import {MdPendingActions} from "react-icons/md"
import { MAIN_STYLE } from '../../utils/style'
import { CURRENCY } from '../../utils/url'
import {FaUserCircle,FaBox,FaUsers} from "react-icons/fa"
import {BsFillClockFill,BsFillCreditCardFill,BsArrowDownLeftCircleFill,BsArrowUpRightCircleFill} from 'react-icons/bs'
import {GiStarsStack,GiRank1} from "react-icons/gi"


const Transaction = (props)=>{
    return <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:5,padding:10,borderBottom:"1px solid #F2F2F2"}}>
     <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
     <div style={{fontSize:30,color:props.direction==="in"?"#58FA58":"#FA5858",marginRight:20}}>
        {props.direction==="in"?<BsArrowDownLeftCircleFill/>:<BsArrowUpRightCircleFill/>}
       </div>
       <div style={{fontSize:13}}>
        <div>{props.description}</div>
       <div>{props.date}</div>
       </div>
     
     </div>
     
       <div >
      
       </div>
       <div style={{color:props.direction==="in"?"#58FA58":"#FA5858"}}>{`${props.direction==="in"?"+":"-"}  ${props.amount} ${CURRENCY}` }
       </div>
    
        </div>
}


function Transactions() {
  return (
    <div>
<div>
    <Transaction description={"عمولة من طلب رقم 1123"} amount={21223} date={"20/2/2022"} direction={"in"} status={1}  />
    <Transaction  description={"سحب إلى حساب بنكك"} amount={5456} date={"02/6/2022"} direction={"out"} status={1}  />
    <Transaction description={"عمولة من طلب رقم 1123"} amount={21223} date={"20/2/2022"} direction={"in"} status={1}  />
    <Transaction  description={"سحب إلى حساب بنكك"} amount={5456} date={"02/6/2022"} direction={"out"} status={1}  />
    <Transaction description={"عمولة من طلب رقم 1123"} amount={21223} date={"20/2/2022"} direction={"in"} status={1}  />
    <Transaction  description={"سحب إلى حساب بنكك"} amount={5456} date={"02/6/2022"} direction={"out"} status={1}  />
      <Transaction description={"عمولة من طلب رقم 1123"} amount={21223} date={"20/2/2022"} direction={"in"} status={1}  />
    <Transaction  description={"سحب إلى حساب بنكك"} amount={5456} date={"02/6/2022"} direction={"out"} status={1}  />
      <Transaction description={"عمولة من طلب رقم 1123"} amount={21223} date={"20/2/2022"} direction={"in"} status={1}  />
    <Transaction  description={"سحب إلى حساب بنكك"} amount={5456} date={"02/6/2022"} direction={"out"} status={1}  />
      <Transaction description={"عمولة من طلب رقم 1123"} amount={21223} date={"20/2/2022"} direction={"in"} status={1}  />
    <Transaction  description={"سحب إلى حساب بنكك"} amount={5456} date={"02/6/2022"} direction={"out"} status={1}  />
      <Transaction description={"عمولة من طلب رقم 1123"} amount={21223} date={"20/2/2022"} direction={"in"} status={1}  />
    <Transaction  description={"سحب إلى حساب بنكك"} amount={5456} date={"02/6/2022"} direction={"out"} status={1}  />
      <Transaction description={"عمولة من طلب رقم 1123"} amount={21223} date={"20/2/2022"} direction={"in"} status={1}  />
    <Transaction  description={"سحب إلى حساب بنكك"} amount={5456} date={"02/6/2022"} direction={"out"} status={1}  />
    
    </div> 

    

    

   
    

    </div>
  )
}

export default Transactions