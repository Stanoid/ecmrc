import React from 'react'

import Styles from "../../styles/Home.module.css"
import { CURRENCY,ImgHandler } from '../../utils/url'
import { ROOT_URL } from '../../utils/url'
import Image from 'next/image'
import { useState } from 'react'
import im from "../../public/ji.jpg"
import { MAIN_STYLE } from '../../utils/style'
import { useRouter } from 'next/router'


export default function Product(props) {
  const router = useRouter();
  const [loading,setLoading]= useState(false);
    return (
        <div onClick={()=>{router.push(`/products/${props.id}`); setLoading(true)}} style={{marginBottom:20,display:'inline-block',width:"175px",textAlign:'left'}}>

      <div style={{width:"175px",height:"250px",backgroundColor:'lightgrey',borderRadius:5,display:'flex',alignItems:'center',justifyContent:"center"}}>
      <div style={{width:'175px',height:'250px',backgroundColor:'rgb(0,0,0,0.5)',position:"absolute",zIndex:10,display:loading?'flex':'none', justifyContent:'center',alignItems:'center' }}>
     <div style={{width:15,height:15,borderRadius:100,backgroundColor:MAIN_STYLE.primary,margin:2}}></div>
     <div style={{width:15,height:15,borderRadius:100,backgroundColor:MAIN_STYLE.primary,margin:2}}></div>
     <div style={{width:15,height:15,borderRadius:100,backgroundColor:MAIN_STYLE.primary,margin:2}}></div>
      </div>
    <Image
      quality={"50"}
       width={"175px"}
        height={"250px"} 
          className={Styles.nextimg} 
          src={ROOT_URL+props.img.hash+props.img.ext} 
          />
      </div>
      <div className={Styles.ptfont} style={{fontSize:'1rem',marginTop:3,marginBottom:3}} >
          {props.name.length>=19?props.name.slice(0,19)+"...":props.name}
      </div>
      <span style={{padding:4,backgroundColor:MAIN_STYLE.primary,color:'white',borderRadius:3}} className={Styles.ptfont}>{`${props.price} ${CURRENCY}`}</span>
     


        </div>
    )
}
