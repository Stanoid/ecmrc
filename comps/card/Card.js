import React from 'react'
import Styles from "../card/Card.module.css"
import { useRouter } from 'next/router'
export default function Card(props) {
    const router = useRouter()
    return (
        <div  onClick={()=>{router.push(`/products/${props.id}`)}}  className={Styles.color}>
            <div>
            <div style={{fontWeight:'bold',color:"grey",fontSize:20}}>
            {props.name}
            </div>

            <div>
            {props.price}
            </div>

            </div>
         
      
        <div>
       <img src={props.image} height={100} width={100} />    
        </div>
        </div>
    )
}
