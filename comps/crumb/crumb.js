import React from 'react'
import randomColor from 'randomcolor'
import { useRouter } from 'next/router';
import Styles from "../../styles/Home.module.css"
import { MAIN_STYLE } from '../../utils/style';
export default function Crumb(props) {

    const router = useRouter();
    const color = randomColor({
        luminosity: 'dark',
        hue :"green",
        
       
        
       
     });

    return (
      
            
<div className={Styles.MAIN_FONT} onClick={()=>{router.push(`/catagories/${props.id}`)}} style={{padding:"0px 7px 0px 7px",margin:2,marginTop:0,color:"white",borderRadius:"3px 5px 0px 5px",backgroundColor:MAIN_STYLE.primary,
display:'inline-block',cursor:"pointer"}} >
{props.name}
</div>
       
    )
}
