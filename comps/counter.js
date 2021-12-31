import React from 'react'
import { MdAdd } from 'react-icons/md'
import { BiMinus, BiMusic } from 'react-icons/bi'
export default function Counter(props) {

    const plusQty=()=>{
        console.log("limit",props.limit)
       if(props.qty<props.limit){
           props.setQ(props.qty +1)
       }
    }

    const minusQty=()=>{
        console.log("limit",props.limit)
        if(props.qty>0){
            props.setQ(props.qty -1)
        }
     }




    return (
        <div style={{display:'flex',alignItems:'center',}}>
          
          <div onClick={()=>{minusQty()}} style={{width:50,height:50,display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid black',borderRadius:10,cursor:"pointer"}} >
                <BiMinus style={{fontSize:30}} />
            </div>
          
            <div style={{padding:20,fontWeight:"bold",display:'flex',alignItems:"center",justifyContent:'center'}}>
                <span>{props.qty}</span>

            </div>
            <div onClick={()=>{plusQty()}} style={{width:50,height:50,display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid black',borderRadius:10,cursor:"pointer"}} >
                <MdAdd style={{fontSize:30}} />
            </div>

          
            
        </div>
    )
}
