import React from 'react'
import { useState } from 'react'
import Loading from "../../img/pulse.gif"
import Image from "next/image"
import { MAIN_STYLE } from '../../utils/style'

function LoadingBtn(props) {
  return (

 


<button onClick={props.act} style={{display:"flex",alignItems:"center",justifyContent:"center"}} className="mt-4 w-full bg-primary text-white py-2 rounded-md text-lg tracking-wide">

<div style={{display:props.lod?"flex":"none",justifyContent:"center",alignItems:"center"}} className="lds-facebookbtn"><div></div><div></div><div></div></div>
<span style={{display:props.lod?"none":"block"}} >{props.text}</span>
</button>


  )
}

export default LoadingBtn