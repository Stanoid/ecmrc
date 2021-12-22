import React from 'react'
import randomColor from 'randomcolor'
export default function Crumb(props) {

    const color = randomColor({
        luminosity: 'dark',
        hue :"blue",
        
       
        
       
     });

    return (
      
            
<div style={{padding:"0px 7px 0px 7px",margin:2,border:`2px solid ${color}`,color:color,borderRadius:50,
display:'inline-block'}}>
{props.name}
</div>
       
    )
}
