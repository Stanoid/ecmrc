import React from 'react'

import Styles from "../../styles/Home.module.css"
import { CURRENCY,ImgHandler } from '../../utils/url'
import { ROOT_URL } from '../../utils/url'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import im from "../../public/ji.jpg"
import { MAIN_STYLE } from '../../utils/style'
import Head from 'next/head'
import { BsStarFill,BsCheck2Circle,BsCheckCircleFill } from 'react-icons/bs'
import { useRouter } from 'next/router'



export default function Product(props) {
  const router = useRouter();
  const [loading,setLoading]= useState(false);


  useEffect(() => {
  // console.log("group",props.hasGroup)
   }, [])
    return (

      
        <div onClick={()=>{router.push(`/products/${props.id}`); setLoading(true)}} style={{marginBom:20,display:'inline-block',width:"175px",textAlign:'left',width:"100%"}}>


      <div style={{width:"100%",height:"100%",borderRadius:5,display:'flex',alignItems:'center',justifyContent:"center"}}>
      <div style={{position:"absolute",zIndex:10,display:loading?'flex':'none', justifyContent:'center',alignItems:'center' }}>
     <div style={{width:15,height:15,borderRadius:100,backgroundColor:MAIN_STYLE.primary,margin:2}}></div>
     <div style={{width:15,height:15,borderRadius:100,backgroundColor:MAIN_STYLE.primary,margin:2}}></div>
     <div style={{width:15,height:15,borderRadius:100,backgroundColor:MAIN_STYLE.primary,margin:2}}></div>
      </div>
    <img
      quality={"50"}
       width={"100%"}
        height={"100%"} 
        style={{objectFit:'cover',width:'100%',height:'100%'}}
      
      
          className={Styles.nextimg} 
          src={props.img} 
          />
      </div>

      <div className={Styles.ptfont} style={{color:"#585858",fontSize:'0.9rem',marginTop:10,marginBottom:5,lineHeight:1.2,textTransform:'capitalize',wordSpacing:0.6}} >
         
          {props.name}
          <div style={{color:"grey",fontSize:12,display:'flex',alignItems:'center'}}>{props.vendor} <BsCheckCircleFill style={{color:MAIN_STYLE.primary,marginLeft:3,display:props.ver?"block":"none"}} /> </div>
      </div>

      {/* <div className={Styles.MAIN_FONT} style={{fontSize:'1rem',marginTop:3,marginBottom:3}} >
          {props.description.length>=19?props.description.slice(0,19)+"...":props.description}
      </div> */}
      
      <div className='grid grid-cols-5 gap-x-2'>
<div className='col-span-3' > 
<span style={{color:"grey"}} 
      className={Styles.MAIN_FONT}> {`${CURRENCY} `} <span style={{fontWeight:"bold",color:"#1c1c1c"}} >{parseFloat(props.price.price)} </span></span>


</div>


<div style={{display:props.hasGroup==null?"none":"block"}} className='col-span-2' >
<span style={{color:"white",backgroundColor:MAIN_STYLE.primary,padding:"1px 5px 1px 5px",borderRadius:"3px 5px 0px 5px",fontSize:13}}>Group
</span>

</div>

<div className='col-span-5' >
<span style={{color:"grey",fontSize:13}} 
      className={Styles.MAIN_FONT}> {`${CURRENCY} `} <span style={{fontWeight:"bold",color:"#1c1c1c"}} >{parseFloat(props.price.comm)} Commision </span></span>
   </div>



      </div>

      <div className=' grid grid-cols-2 gap-x-2'style={{marginTop:10}} >
        <div></div>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <BsStarFill style={{color:"#F5A523"}} />
        <span style={{color:"#F5A523",marginLeft:3,fontWeight:'bold'}}>4.9</span>
        <span style={{color:"grey",marginLeft:1}}>(232)</span>
        </div>
        
        
        </div>
      </div>
    


        </div>
    )
}
