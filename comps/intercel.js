import React from 'react'
import { MAIN_STYLE } from '../utils/style'
import { BsMegaphone,BsShop,BsPlus,BsCheck } from 'react-icons/bs';
import { useEffect,useState} from 'react';

function interCell(props) {
    
  

  return (
<div onClick={props.ex?()=>{props.removecat(props.id)}:()=>{props.addcat(props.id,props.name)}} style={{display:"inline-block"}}>
<div style={{display:"flex",alignItems:"center",backgroundColor:props.ex?MAIN_STYLE.primary:"white",color:props.ex?"white":MAIN_STYLE.primary,justifyContent:"center",padding:"0px 4px",border:"2px solid"+MAIN_STYLE.primary,borderRadius:50,margin:"2px 2px"}}>
    {
   props.ex?<BsCheck/>:<BsPlus/>
    }
      {props.name}</div>
</div>
    )
}

export default interCell