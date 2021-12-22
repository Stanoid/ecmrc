import React from 'react'
import Styles from "../../styles/Home.module.css"
import { CURRENCY } from '../../utils/url'
export default function Product(props) {
    return (
        <div style={{marginBottom:10,display:'inline-block',width:"175px"}}>
      <div style={{width:"175px",height:"250px",backgroundColor:'lightgrey',borderRadius:5}}>

      </div>
      <div className={Styles.ptfont} style={{fontSize:'1.2rem',marginTop:3,marginBottom:3}} >
          {props.name}
      </div>
      <span className={Styles.ptfont}>{`${props.price} ${CURRENCY}`}</span>
     

        </div>
    )
}
