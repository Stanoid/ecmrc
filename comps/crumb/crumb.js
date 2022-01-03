import React from 'react'
import randomColor from 'randomcolor'
import { useRouter } from 'next/router';
export default function Crumb(props) {

    const router = useRouter();
    const color = randomColor({
        luminosity: 'dark',
        hue :"blue",
        
       
        
       
     });

    return (
      
            
<div onClick={()=>{router.push(`/catagories/${props.id}`)}} style={{padding:"0px 7px 0px 7px",margin:2,marginTop:90,border:`2px solid ${color}`,color:color,borderRadius:50,
display:'inline-block',cursor:"pointer"}} className='hover:opacity-50 text-black transition-all '>
{props.name}
</div>
       
    )
}
